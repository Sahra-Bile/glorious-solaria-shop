import { SQLiteClient, createConnection } from "../../sqlite-wrapper";
import type { ProductVariantDisplay, ProductVariantsParams } from "../models";

class DatabaseService {
  private db!: SQLiteClient;

  constructor(private dbFilePath?: string) {}

  public async connect() {
    this.db = await createConnection(this.dbFilePath);
    await this.db.run(
      `CREATE TABLE IF NOT EXISTS productVariants (
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
    `
    );
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
  ): Promise<ProductVariantDisplay[]> {
    await this.connect();
    const offset = (page - 1) * limit;
    const productList = await this.db.all<ProductVariantDisplay>(
      `SELECT
      pv.variantId,
      p.productId,
      p.productName,
      p.description,
      p.image_1,
      p.image_2,
      p.image_3,
      p.image_4,
      c.categoryName,
      GROUP_CONCAT(DISTINCT s.size) AS sizes,
      GROUP_CONCAT(DISTINCT cl.colorName) AS colors,
      MIN(pv.stockQuantity) AS stockQuantity,
      MIN(pv.price) AS price
       FROM
      productVariants pv
       JOIN
      products p ON pv.productId = p.productId
      JOIN
      categories c ON p.categoryId = c.categoryId
      JOIN
      sizes s ON pv.sizeId = s.sizeId
      JOIN
      colors cl ON pv.colorId = cl.colorId
      GROUP BY p.productId
      LIMIT ? OFFSET ?;
     
    `,
      [limit, offset]
    );

    return productList;
  }

  public async getTotalProductVariantCount(): Promise<number> {
    await this.connect();
    const result = await this.db.get<{ count: number }>(
      `SELECT COUNT(DISTINCT productId) AS count FROM products`
    );
    const count = result?.count || 0;
    return count;
  }

  public async getProductVariantById(variantId: number) {
    await this.connect();

    // First get the productId from the variantId
    const productIdResult: any = await this.db.get(
      `SELECT productId FROM productVariants WHERE variantId = ?;`,
      [variantId]
    );

    const productId = productIdResult?.productId;

    if (!productId) {
      return null; // No productId found
    }

    // Get the product info
    const productInfo = await this.db.get(
      `SELECT
        p.productId,
        p.productName,
        p.description,
        p.image_1,
        p.image_2,
        p.image_3,
        p.image_4,
        c.categoryName,
        MIN(pv.stockQuantity) AS stockQuantity,
        MIN(pv.price) AS price
         FROM products p JOIN
        categories c ON p.categoryId = c.categoryId 
         JOIN
        productVariants pv ON pv.productId = p.productId
         WHERE p.productId = ?
      GROUP BY p.productId;
      `,
      [productId]
    );

    if (!productInfo) {
      return null; // No product found
    }

    // Get the sizes
    const sizes = await this.db.all(
      `SELECT DISTINCT s.size
      FROM sizes s
      JOIN productVariants pv ON pv.sizeId = s.sizeId
      WHERE pv.productId = ?;`,
      [productId]
    );

    // Get the colors
    const colors = await this.db.all(
      `SELECT DISTINCT cl.colorName
      FROM colors cl
      JOIN productVariants pv ON pv.colorId = cl.colorId
      WHERE pv.productId = ?;`,
      [productId]
    );

    // Return the product info with the sizes and colors
    return {
      ...productInfo,
      sizes,
      colors,
    };
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
