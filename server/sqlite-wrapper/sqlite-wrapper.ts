import { open } from "sqlite";
import sqlite3 from "sqlite3";

export class SQLiteClient {
  private db: sqlite3.Database;
  constructor(db: sqlite3.Database) {
    this.db = db;
  }

  public async run(sql: string, params?: unknown[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.run(sql, params, (err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  public async get<T>(sql: string, params?: unknown[]): Promise<T | undefined> {
    return new Promise<T | undefined>((resolve, reject) => {
      this.db.get(sql, params, (err: Error | null, row: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  public async all<T>(sql: string, params?: unknown[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      this.db.all(sql, params, (err: Error | null, rows: T[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  public async close(): Promise<void> {
     this.db.close();
  }
}
export const createConnection = async (
  dbFilePath: string = "./database.db"
): Promise<SQLiteClient> => {
  const db = new sqlite3.Database(dbFilePath);
  db.run("PRAGMA foreign_keys = ON"); // Aktivera foreign keys
  return new SQLiteClient(db);
};
