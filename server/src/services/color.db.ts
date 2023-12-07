import {
  SQLiteClient,
  createConnection,
} from "../../sqlite-wrapper/sqlite-wrapper";
import type { ColorParams } from "../models/product.types";

class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {}

  public async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db
      .run(`CREATE TABLE IF NOT EXISTS colors (colorId INTEGER PRIMARY KEY AUTOINCREMENT, colorName TEXT NOT NULL)
   `);
  }

  public async addColors(color: Omit<ColorParams, "id">) {
    await this.connect();
    try {
      await this.db.run("INSERT INTO colors ( colorName) VALUES (?)", [
        color.colorName,
      ]);

      return;
    } catch (e) {
      console.log(` error from the catch services ${e}`);
    }
  }

  public async getAllColors(): Promise<ColorParams[]> {
    await this.connect();
    const colorList = await this.db.all<ColorParams>(`SELECT * FROM colors`);

    return colorList;
  }

  public async getColorById(id: number) {
    await this.connect();
    const color = await this.db.get<ColorParams>(
      `SELECT * FROM colors WHERE colorId =?`,
      [id]
    );

    return color;
  }

  public async deleteColorById(id: number) {
    await this.connect();
    await this.db.run(`DELETE FROM colors WHERE colorId =?`, [id]);
  }
}

export default new DatabaseService();
