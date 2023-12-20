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
    // console.log("userList from getAllUsers: ", userList);
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
      await this.db.run("UPDATE users SET phone=? address = ?, city = ?, zipCode = ? WHERE googleUserId = ?", [
        addressData.address,
        addressData.city,
        addressData.zipCode,
        addressData.phone,
        googleUserId
      ]);
      return this.findUserByGoogleId(googleUserId);
    } catch (e) {
      console.error(`Error updating address: ${e}`);
      throw e;
    }
  }
  

  public initializePassport() {
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID || '233592439149-jminq2kivu76dblr0j8pap2332jq9ih1.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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',
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

