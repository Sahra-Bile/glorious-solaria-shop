import express from "express";
import ColorController from "../controllers/color-controller";
import Middleware from "../middleware/middleware";
export const colorRoutes = express.Router();

colorRoutes.get(
  "/",
  Middleware.handleValidationError,
  ColorController.getAllColors
);
colorRoutes.post(
  "/",
  Middleware.handleValidationError,
  ColorController.createColor
);

colorRoutes.get(
  "/:id",

  Middleware.handleValidationError,
  ColorController.getColorById
);
colorRoutes.delete(
  "/:id",
  Middleware.handleValidationError,
  ColorController.deleteColorById
);
