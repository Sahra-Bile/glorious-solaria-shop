import express from "express";
import { colorController } from "../controllers";
import { middleware } from "../middleware";

export const colorRoutes = express.Router();

colorRoutes.use(middleware.default.handleValidationError);

colorRoutes.get("/", colorController.default.getAllColors);
colorRoutes.post("/", colorController.default.createColor);
colorRoutes.get("/:id", colorController.default.getColorById);
colorRoutes.delete("/:id", colorController.default.deleteColorById);
