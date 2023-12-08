import express from "express";
import SizeController from "../controllers/size-controller";
import Middleware from "../middleware/middleware";
export const sizeRoutes = express.Router();

sizeRoutes.get(
  "/",
  Middleware.handleValidationError,
  SizeController.getAllSizes
);
sizeRoutes.post(
  "/",
  Middleware.handleValidationError,
  SizeController.createSize
);

sizeRoutes.get(
  "/:id",

  Middleware.handleValidationError,
  SizeController.getSizeById
);
sizeRoutes.delete(
  "/:id",
  Middleware.handleValidationError,
  SizeController.deleteSizeById
);
