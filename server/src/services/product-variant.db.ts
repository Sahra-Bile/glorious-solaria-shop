import { SQLiteClient, createConnection } from "../../sqlite-wrapper";
import type { ProductVariantsParams } from "../models";

class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {}

  public async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db.run(`
        CREATE TABLE IF NOT EXISTS productVariants (
           variantId INTEGER PRIMARY KEY AUTOINCREMENT,
           productId INTEGER NOT NULL,
           sizeId INTEGER NOT NULL,
           colorId INTEGER NOT NULL,
            stockQuantity INTEGER NOT NULL,
            price INTEGER NOT NULL,
            FOREIGN KEY (productId) REFERENCES products(productId),
            FOREIGN KEY (sizeId) REFERENCES sizes(sizeId),
            FOREIGN KEY (colorId) REFERENCES colors(colorId),
            UNIQUE (productId, sizeId, colorId)
        )
    `);
  }

  public async addProductVariants(
    productVariant: Omit<ProductVariantsParams, "id">
  ) {
    await this.connect();
    try {
      await this.db.run(
        "INSERT INTO productVariants (productId, sizeId, colorId, stockQuantity,price) VALUES (?, ?, ?, ?,?)",
        [
          productVariant.productId,
          productVariant.sizeId,
          productVariant.colorId,
          productVariant.stockQuantity,
          productVariant.price,
        ]
      );

      return;
    } catch (e) {
      console.log(` error from the catch services ${e}`);
    }
  }

  public async getAllProductVariants(
    page: number,
    limit: number
  ): Promise<ProductVariantsParams[]> {
    await this.connect();
    const offset = (page - 1) * limit;
    const productList = await this.db.all<ProductVariantsParams>(
      `SELECT * FROM productVariants LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    return productList;
  }

  public async getTotalProductVariantCount(): Promise<number> {
    await this.connect();
    const result = await this.db.get<{ count: number }>(
      `SELECT COUNT(*) AS count FROM productVariants`
    );
    const count = result?.count || 0;
    return count;
  }

  public async getProductVariantById(id: number) {
    await this.connect();
    const productVariant = await this.db.get<ProductVariantsParams>(
      `SELECT * FROM productVariants WHERE variantId =?`,
      [id]
    );

    return productVariant;
  }

  public async deleteProductVariantById(id: number) {
    await this.connect();

    await this.db.run(`DELETE FROM productVariants WHERE variantId =?`, [id]);
  }

  public async updateProductVariant(
    id: number,
    productVariant: Omit<ProductVariantsParams, "id">
  ) {
    await this.connect();
    await this.db.run(
      "UPDATE productVariants SET productId = ? , sizeId = ? , colorId = ? , stockQuantity = ? , price = ? WHERE variantId = ? ",
      [
        productVariant.productId,
        productVariant.sizeId,
        productVariant.colorId,
        productVariant.stockQuantity,
        productVariant.price,
        id,
      ]
    );

    return productVariant;
  }
}

export default new DatabaseService();
