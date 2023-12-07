import {
  SQLiteClient,
  createConnection,
} from "../../sqlite-wrapper/sqlite-wrapper";
import type { CategoryParams } from "../models/product.types";

class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {}

  public async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db.run(`
     CREATE TABLE IF NOT EXISTS categories (
  categoryId INTEGER PRIMARY KEY AUTOINCREMENT,
  categoryName TEXT NOT NULL
   )
 `);
  }

  public async addCategories(category: Omit<CategoryParams, "id">) {
    await this.connect();
    try {
      await this.db.run("INSERT INTO categories ( categoryName) VALUES (?)", [
        category.categoryName,
      ]);

      return;
    } catch (e) {
      console.log(` error from the catch services ${e}`);
    }
  }

  public async getAllCategories(): Promise<CategoryParams[]> {
    await this.connect();
    const usersList = await this.db.all<CategoryParams>(
      `SELECT * FROM categories`
    );

    return usersList;
  }

  public async getCategoryById(id: number) {
    await this.connect();
    const category = await this.db.get<CategoryParams>(
      `SELECT * FROM categories WHERE id =?`,
      [id]
    );

    return category;
  }

  public async deleteCategoryById(id: number) {
    await this.connect();

    await this.db.run(`DELETE FROM categories WHERE id =?`, [id]);
  }
}

export default new DatabaseService();
