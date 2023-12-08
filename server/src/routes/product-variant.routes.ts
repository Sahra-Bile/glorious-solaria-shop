import express from "express";
import { productVariantController } from "../controllers";
import { productValidator } from "../validator";
import { middleware } from "../middleware";

export const productVariantRoutes = express.Router();

productVariantRoutes.use(middleware.default.handleValidationError);

productVariantRoutes.get("/", productVariantController.default.getAllProductVariant);
productVariantRoutes.post(
  "/",
  productValidator.default.checkCreatedProduct(),
  productVariantController.default.createProductVariant
);

productVariantRoutes.get(
  "/:id",
  productValidator.default.checkIdParam(),
  productVariantController.default.getProductVariantById
);
productVariantRoutes.put(
  "/:id",
  productValidator.default.checkIdParam(),
  productValidator.default.checkUpdatedProduct(),
  productVariantController.default.updateProductVariant
);
productVariantRoutes.delete(
  "/:id",
  productValidator.default.checkIdParam(),
  productVariantController.default.deleteProductVariantById
);
