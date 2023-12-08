import { SQLiteClient, createConnection } from "../../sqlite-wrapper";
import type { SizeParams } from "../models";

class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {}

  public async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db
      .run(`CREATE TABLE IF NOT EXISTS sizes (sizeId INTEGER PRIMARY KEY AUTOINCREMENT, size TEXT NOT NULL)
     `);
  }

  public async addSizes(size: Omit<SizeParams, "id">) {
    await this.connect();
    try {
      await this.db.run("INSERT INTO sizes ( size) VALUES (?)", [size.size]);

      return;
    } catch (e) {
      console.log(` error from the catch services ${e}`);
    }
  }

  public async getAllSizes(): Promise<SizeParams[]> {
    await this.connect();
    const sizeList = await this.db.all<SizeParams>(`SELECT * FROM sizes`);

    return sizeList;
  }

  public async getSizeById(id: number) {
    await this.connect();
    const size = await this.db.get<SizeParams>(
      `SELECT * FROM sizes WHERE sizeId =?`,
      [id]
    );

    return size;
  }

  public async deleteSizeById(id: number) {
    await this.connect();
    await this.db.run(`DELETE FROM sizes WHERE sizeId =?`, [id]);
  }
}

export default new DatabaseService();
