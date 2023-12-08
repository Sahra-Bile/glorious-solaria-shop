import type { CategoryParams } from "../models";
import { Request, Response } from "express";
import {categoryDB} from "../services";

class CategoryController {
  public async createCategory(req: Request, res: Response): Promise<void> {
    const newCategory = req.body as Omit<CategoryParams, "id">;
    if (!newCategory.categoryName) {
      res.status(400).json({
        mgs: "must specify all properties that a Category has",
      });
    }
    try {
      await categoryDB.default.addCategories(newCategory);
      res.status(201).json({ mgs: "created the Category successfully!" });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
  }

  public async getAllCategories(req: Request, res: Response) {
    const category = await categoryDB.default.getAllCategories();
    res.status(200).json(category);
  }

  public async getCategoryById(req: Request, res: Response): Promise<void> {
    const categoryId = Number(req.params.id);

    const category = await categoryDB.default.getCategoryById(categoryId);

    if (category) {
      res.status(200).json(category);
    } else {
      res
        .status(404)
        .json({ message: `category with id ${categoryId} not found` });
    }
  }

  public async deleteCategoryById(req: Request, res: Response): Promise<void> {
    const categoryId = Number(req.params.id);
    try {
      await categoryDB.default.deleteCategoryById(categoryId);
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

export default new CategoryController();
