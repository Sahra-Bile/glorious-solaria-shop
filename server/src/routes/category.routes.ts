import express from "express";
import { categoryController } from "../controllers";
import { middleware } from "../middleware";

export const categoryRoutes = express.Router();

categoryRoutes.use(middleware.default.handleValidationError);

categoryRoutes.get("/", categoryController.default.getAllCategories);
categoryRoutes.post("/", categoryController.default.createCategory);

categoryRoutes.get("/:id", categoryController.default.getCategoryById);
categoryRoutes.delete("/:id", categoryController.default.deleteCategoryById);
