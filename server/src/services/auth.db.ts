import passport from 'passport';
import { SQLiteClient, createConnection } from "../../sqlite-wrapper/sqlite-wrapper";
import type { UserParams } from "../models";
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';


class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) { 

  }
 
  private async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db.run(`CREATE TABLE IF NOT EXISTS users (
      userId INTEGER PRIMARY KEY AUTOINCREMENT,
      googleUserId TEXT NOT NULL, 
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL, 
      email TEXT NOT NULL)
    `);
  }

  public async findUserByGoogleId(googleId: string): Promise<UserParams | undefined> {
    this.connect();
    const user = await this.db.get<UserParams>(`SELECT * FROM users WHERE googleUserId = ?`, [googleId]);
    return user;
  }
  

  public async createUser(user: Omit<UserParams, "userId">) {
    this.connect();
    try {
      await this.db.run("INSERT INTO users (googleUserId, firstName, lastName, email) VALUES (?, ?, ?, ?)", [
        user.googleUserId,
        user.firstName,
        user.lastName,
        user.email
      ]);
      return this.findUserByGoogleId(user.googleUserId);
    } catch (e) {
      console.error(`Error from the catch services: ${e}`);
      throw e; 
    }
  }

  public initializePassport() {
    this.connect();
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: 'http://localhost:9000/auth/google/callback'
    },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await this.findUserByGoogleId(profile.id);
          if (!user) {
            user = await this.createUser({
              googleUserId: profile.id,
              firstName: profile.name?.givenName || '',
              lastName: profile.name?.familyName || '',
              email: profile.emails?.[0].value || ''
            });
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    ));
  }

}

export default new DatabaseService();



