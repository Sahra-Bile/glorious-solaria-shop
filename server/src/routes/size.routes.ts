import express from "express";
import { sizeController } from "../controllers";
import { middleware } from "../middleware";

export const sizeRoutes = express.Router();

sizeRoutes.use(middleware.default.handleValidationError);

sizeRoutes.get("/", sizeController.default.getAllSizes);
sizeRoutes.post("/", sizeController.default.createSize);
sizeRoutes.get("/:id", sizeController.default.getSizeById);
sizeRoutes.delete("/:id", sizeController.default.deleteSizeById);
