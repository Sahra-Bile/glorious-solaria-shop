import type { CategoryParams } from "../models/product.types";
import { Request, Response } from "express";
import * as dbService from "../services/category.db";

class ProductController {
  public async createProduct(req: Request, res: Response): Promise<void> {
    const newCategory = req.body as Omit<CategoryParams, "id">;
    if (!newCategory.categoryName) {
      res.status(400).json({
        mgs: "must specify all properties that a Category has",
      });
    }
    try {
      await dbService.default.addCategories(newCategory);
      res.status(201).json({ mgs: "created the Category successfully!" });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
  }

  public async getAllCategories(req: Request, res: Response) {
    const category = await dbService.default.getAllCategories();
    res.status(200).json(category);
  }

  public async getProductById(req: Request, res: Response): Promise<void> {
    const categoryId = Number(req.params.id);

    const category = await dbService.default.getCategoryById(categoryId);

    if (category) {
      res.status(200).json(category);
    } else {
      res
        .status(404)
        .json({ message: `category with id ${categoryId} not found` });
    }
  }

  public async deleteProductById(req: Request, res: Response): Promise<void> {
    const categoryId = Number(req.params.id);
    try {
      await dbService.default.deleteCategoryById(categoryId);
      if (!categoryId) {
        res
          .status(404)
          .json({ message: `category with id ${categoryId} not found` });
      } else {
        res
          .status(200)
          .json({
            mgs: `category with id: ${categoryId} deleted successfully`,
          });
      }
    } catch (e) {
      res.status(500).json({ mgs: `something went wrong` });
    }
  }
}

export default new ProductController();
