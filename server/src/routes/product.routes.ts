import express from "express";
import { productController } from "../controllers";
import { productValidator } from "../validator";
import { middleware } from "../middleware";

export const productRoutes = express.Router();

productRoutes.use(middleware.default.handleValidationError);

productRoutes.get("/", productController.default.getAllProduct);
productRoutes.post(
  "/",
  productValidator.default.checkCreatedProduct(),
  productController.default.createProduct
);

productRoutes.get(
  "/:id",
  productValidator.default.checkIdParam(),
  productController.default.getProductById
);
productRoutes.put(
  "/:id",
  productValidator.default.checkIdParam(),
  productValidator.default.checkUpdatedProduct(),
  productController.default.updateProduct
);
productRoutes.delete(
  "/:id",
  productValidator.default.checkIdParam(),
  productController.default.deleteProductById
);
