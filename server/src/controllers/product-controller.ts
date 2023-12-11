import type { ProductParams } from "../models";
import { Request, Response } from "express";
import { productDB } from "../services";

class ProductController {
  public async createProduct(req: Request, res: Response): Promise<void> {
    const newProduct = req.body as Omit<ProductParams, "id">;
    const requiredFields = [
      "categoryId",
      "productName",
      "description",
      "image",
    ];
    const missingFields = requiredFields.filter(
      (field) =>
        (newProduct as any)[field] === undefined ||
        (newProduct as any)[field] === null
    );
    if (missingFields.length > 0) {
      res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
      return;
    }
     // Konvertera bildarrayen till en sträng för att spara i databasen
     const imagesString = JSON.stringify(newProduct.image);

     // Skapa ett nytt produktobjekt som inkluderar bildsträngen
     const productToSave = {
       ...newProduct,
       image: imagesString,
     };
    try {
      await productDB.default.addProduct(productToSave);
      res.status(201).json({ mgs: "created the product  successfully!" });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
  }

  public async getAllProduct(req: Request, res: Response) {
    const product = await productDB.default.getAllProducts();
    res.status(200).json(product);
  }

  public async getProductById(req: Request, res: Response): Promise<void> {
    const productId = Number(req.params.id);

    const product = await productDB.default.getProductById(productId);

    if (product) {
      res.status(200).json(product);
    } else {
      res
        .status(404)
        .json({ message: `product with id ${productId} not found` });
    }
  }

  public async deleteProductById(req: Request, res: Response): Promise<void> {
    const productId = Number(req.params.id);
    try {
      await productDB.default.deleteProductById(productId);
      if (!productId) {
        res
          .status(404)
          .json({ message: `Product with id ${productId} not found` });
      } else {
        res
          .status(200)
          .json({ mgs: `product with id: ${productId} deleted successfully` });
      }
    } catch (e) {
      res.status(500).json({ mgs: `something went wrong` });
    }
  }

  public async updateProduct(req: Request, res: Response): Promise<void> {
    const productId = Number(req.params.id);
    const updatedProduct = req.body as ProductParams;

    if (updatedProduct.productId !== productId) {
      res.status(400).json({
        message: `product id in request body (${updatedProduct.productId}) does not match product ID in URL (${productId})`,
      });
      return;
    }
    try {
      const updated = await productDB.default.updateProduct(
        productId,
        updatedProduct
      );
      if (!updated) {
        res.status(404).json({
          message: `Product  with id ${productId} not found`,
        });
      } else {
        res.status(200).json(updatedProduct);
      }
    } catch (e: any) {
      res.status(500).json({ message: `Server error: ${e.message}` });
    }
  }
}

export default new ProductController();
