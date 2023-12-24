import passport from 'passport';
import { SQLiteClient, createConnection } from "../../sqlite-wrapper/sqlite-wrapper";
import type { UserParams, AddressParams } from "../models";
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';


class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {
    this.connect().catch(e => console.error(`Database connection failed: ${e.message}`));
  }
  
  private async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db.run(`CREATE TABLE IF NOT EXISTS users (
      userId INTEGER PRIMARY KEY AUTOINCREMENT,
      googleUserId TEXT NOT NULL, 
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL, 
      email TEXT NOT NULL,
      userProfilePicture TEXT,
      phone TEXT,
      address TEXT,
      city TEXT,
      zipCode TEXT
      )
    `);
  }
  public async getAllUsers(): Promise<UserParams[]> {
    const userList = await this.db.all<UserParams>(`SELECT * FROM users`);
    return userList;
  }

  public async findUserByGoogleId(googleId: string): Promise<UserParams | undefined> {
    const user = await this.db.get<UserParams>(`SELECT * FROM users WHERE googleUserId = ?`, [googleId]);
    return user;
  }

  public async createUser(user: Omit<UserParams ,  "userId">) {
    try {
      await this.db.run("INSERT INTO users (googleUserId, firstName, lastName, email, userProfilePicture) VALUES (?, ?, ?, ?,?)", [
        user.googleUserId ,
        user.firstName ,
        user.lastName ,
        user.email,
        user.userProfilePicture,
      ]);
      return this.findUserByGoogleId(user.googleUserId);
     
    } catch (e) {
      console.error(`Error from the catch services: ${e}`);
      throw e; 
    }
  }
  public async deleteUserById(id: number) {
    await this.db.run(`DELETE FROM users WHERE Id =?`, [id]);
  }
  public async updateUseAddress(googleUserId: string, addressData: AddressParams) {
    try {
      await this.db.run("UPDATE users SET phone= ?, address = ?, city = ?, zipCode = ? WHERE googleUserId = ?", [
        addressData.phone,
        addressData.address,
        addressData.city,
        addressData.zipCode,
        googleUserId
      ]);
      return this.findUserByGoogleId(googleUserId);
    } catch (e) {
      console.error(`Error updating address: ${e}`);
      throw e;
    }
  }

  
  public initializePassport() {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
    const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL || '';

    passport.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID ,
      clientSecret: GOOGLE_CLIENT_SECRET ,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await this.findUserByGoogleId(profile.id);
          if (!user) {
            user = await this.createUser({
              googleUserId: profile.id,
              firstName: profile.name?.givenName || '',
              lastName: profile.name?.familyName || '',
              email: profile.emails?.[0].value || '',
              userProfilePicture: profile.photos?.[0].value || '',
              
            });
          }
          return done(null, user );
        } catch (error) {
          return done(error);
        }
      }
    ));
    passport.serializeUser((user: any, done) => {
      console.log(`User from serializeUser: ${user}`);
      done(null, user.googleUserId); 

    });
    
    passport.deserializeUser(async (googleUserId:string, done) => {
      try {
        const user = await this.findUserByGoogleId(googleUserId);
        console.log(`User from deserializeUser: ${user}`);
        done(null, user); 
      } catch (err) {
        done(err);
      }
    });
    
  }
  
}
export default new DatabaseService();
