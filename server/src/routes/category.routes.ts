import express from "express";
import CategoryController from "../controllers/category-controller";
import Middleware from "../middleware/middleware";
export const categoryRoutes = express.Router();

categoryRoutes.get(
  "/",
  Middleware.handleValidationError,
  CategoryController.getAllCategories
);
categoryRoutes.post(
  "/",
  Middleware.handleValidationError,
  CategoryController.createCategory
);

categoryRoutes.get(
  "/:id",

  Middleware.handleValidationError,
  CategoryController.getCategoryById
);
categoryRoutes.delete(
  "/:id",
  Middleware.handleValidationError,
  CategoryController.deleteCategoryById
);
