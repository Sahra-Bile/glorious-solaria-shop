import type { ColorParams} from "../models/product.types";
import { Request, Response } from "express";
import * as dbService from "../services/color.db";

class ColorController {
  public async createColor(req: Request, res: Response): Promise<void> {
    const newColor = req.body as Omit<ColorParams, "id">;
    if (!newColor.colorName) {
      res.status(400).json({
        mgs: "must specify property colorName",
      });
    }
    try {
      await dbService.default.addColors(newColor);
      res.status(201).json({ mgs: "created the color successfully!" });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
  }

  public async getAllColors(req: Request, res: Response) {
    const colorList = await dbService.default.getAllColors();
    res.status(200).json(colorList);
  }

  public async getColorById(req: Request, res: Response): Promise<void> {
    const colorId = Number(req.params.id);

    const color = await dbService.default.getColorById(colorId);

    if (color) {
      res.status(200).json(color);
    } else {
      res
        .status(404)
        .json({ message: `color with id ${colorId} not found` });
    }
  }

  public async deleteColorById(req: Request, res: Response): Promise<void> {
    const colorId = Number(req.params.id);
    try {
      await dbService.default.deleteColorById(colorId);
      if (!colorId) {
        res
          .status(404)
          .json({ message: `color with id ${colorId} not found` });
      } else {
        res
          .status(200)
          .json({
            mgs: `color with id: ${colorId} deleted successfully`,
          });
      }
    } catch (e) {
      res.status(500).json({ mgs: `something went wrong` });
    }
  }
}

export default new ColorController();
