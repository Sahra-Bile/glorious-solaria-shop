import type { ProductParams } from "./models/product.types";
import { Request, Response } from "express";
import * as dbService from "./services/product.db";

class ProductController {
  public async createProduct(req: Request, res: Response): Promise<void> {
    const newProduct = req.body as Omit<ProductParams, "id">;
    if (
      !newProduct.categoryId ||
      !newProduct.productName ||
      !newProduct.description ||
      !newProduct.image
    ) {
      res.status(400).json({
        mgs: "must specify all properties that a product has",
      });
    }
    try {
      await dbService.default.addProduct(newProduct);
      res.status(201).json({ mgs: "created the product successfully!" });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
  }

  public async getAllProduct(req: Request, res: Response) {
    const users = await dbService.default.getAllProducts();
    res.status(200).json(users);
  }

  public async getProductById(req: Request, res: Response): Promise<void> {
    const productId = Number(req.params.id);

    const product = await dbService.default.getProductById(productId);

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
      await dbService.default.deleteProductById(productId);
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
      await dbService.default.updateProduct(productId, updatedProduct);
      res.status(200).json(updatedProduct);
    } catch (e) {
      res
        .status(404)
        .json({ message: `product with id ${productId} not found` });
    }
  }
}

export default new ProductController();
