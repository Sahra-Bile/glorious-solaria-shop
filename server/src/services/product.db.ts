import { SQLiteClient, createConnection } from "../../sqlite-wrapper";
import type { ProductParams } from "../models";

class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {}

  public async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db.run(`
          CREATE TABLE IF NOT EXISTS products (
            productId INTEGER PRIMARY KEY AUTOINCREMENT,
            categoryId INTEGER NOT NULL,
            productName TEXT NOT NULL,
            description TEXT NOT NULL,
           image TEXT NOT NULL,
           FOREIGN KEY (categoryId) REFERENCES categories(categoryId),
           UNIQUE (categoryId, productName)
         
          )
      `);
  }

  public async addProduct(product: Omit<ProductParams, "id">) {
    await this.connect();
    try {
      await this.db.run(
        "INSERT INTO products (categoryId, productName, description, image) VALUES (?, ?, ?, ?)",
        [
          product.categoryId,
          product.productName,
          product.description,
          product.image,
        ]
      );

      return;
    } catch (e) {
      console.log(` error from the catch services ${e}`);
    }
  }

  public async getAllProducts(): Promise<ProductParams[]> {
    await this.connect();
    const productList = await this.db.all<ProductParams>(
      `SELECT * FROM products`
    );

    return productList;
  }

  public async getProductById(id: number) {
    await this.connect();
    const product = await this.db.get<ProductParams>(
      `SELECT * FROM products WHERE productId =?`,
      [id]
    );

    return product;
  }

  public async deleteProductById(id: number) {
    await this.connect();

    await this.db.run(`DELETE FROM products WHERE productId =?`, [id]);
  }

  public async updateProduct(id: number, product: Omit<ProductParams, "id">) {
    await this.connect();
    await this.db.run(
      "UPDATE products SET categoryId = ? , productName = ? , description = ? , image = ? WHERE productId = ? ",
      [
        product.categoryId,
        product.productName,
        product.description,
        product.image,
        id,
      ]
    );

    return product;
  }
}

export default new DatabaseService();
