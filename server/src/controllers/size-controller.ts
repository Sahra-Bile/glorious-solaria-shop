import type { SizeParams } from "../models";
import { Request, Response } from "express";
import { sizeDB } from "../services";

class SizeController {
  public async createSize(req: Request, res: Response): Promise<void> {
    const newSize = req.body as Omit<SizeParams, "id">;
    if (!newSize.size) {
      res.status(400).json({
        mgs: "must specify property size",
      });
    }
    try {
      await sizeDB.default.addSizes(newSize);
      res.status(201).json({ mgs: "created the size successfully!" });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
  }

  public async getAllSizes(res: Response) {
    const sizeList = await sizeDB.default.getAllSizes();
    res.status(200).json(sizeList);
  }

  public async getSizeById(req: Request, res: Response): Promise<void> {
    const sizeId = Number(req.params.id);

    const size = await sizeDB.default.getSizeById(sizeId);

    if (size) {
      res.status(200).json(size);
    } else {
      res.status(404).json({ message: `size with id ${sizeId} not found` });
    }
  }

  public async deleteSizeById(req: Request, res: Response): Promise<void> {
    const sizeId = Number(req.params.id);
    try {
      await sizeDB.default.deleteSizeById(sizeId);
      if (!sizeId) {
        res.status(404).json({ message: `size with id ${sizeId} not found` });
      } else {
        res.status(200).json({
          mgs: `size with id: ${sizeId} deleted successfully`,
        });
      }
    } catch (e) {
      res.status(500).json({ mgs: `something went wrong` });
    }
  }
}

export default new SizeController();
