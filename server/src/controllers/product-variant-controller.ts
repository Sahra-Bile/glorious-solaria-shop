import type { ProductVariantsParams } from "../models";
import { Request, Response } from "express";
import { productVariantDB } from "../services";

class ProductVariantController {
  public async createProductVariant(
    req: Request,
    res: Response
  ): Promise<void> {
    const newProductVariant = req.body as Omit<ProductVariantsParams, "id">;
    const requiredFields = [
      "productId",
      "sizeId",
      "colorId",
      "stockQuantity",
      "price",
    ];
    const missingFields = requiredFields.filter(
      (field) =>
        (newProductVariant as any)[field] === undefined ||
        (newProductVariant as any)[field] === null
    );
    if (missingFields.length > 0) {
      res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
      return;
    }
    try {
      await productVariantDB.default.addProductVariants(newProductVariant);
      res
        .status(201)
        .json({ message: "Created the product variant successfully!" });
    } catch (e: any) {
      console.log("error from the catch services", e);
      if (
        e.message &&
        e.message.SQLITE_CONSTRAINT.includes(" FOREIGN KEY constraint failed")
      ) {
        res.status(400).json({
          message: "Foreign key constraint failed. Please check your input.",
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  public async getAllProductVariant(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
      const productVariant =
        await productVariantDB.default.getAllProductVariants(page, limit);

      // get total rows
      const totalRows =
        await productVariantDB.default.getTotalProductVariantCount();
      const totalPages = Math.ceil(totalRows / limit);

      res.status(200).json({
        page,
        totalPages,
        limit,
        totalRows,
        data: productVariant,
      });
    } catch (error:any) {
      res.status(500).send(error.message);
    }
  }

  public async getProductVariantById(
    req: Request,
    res: Response
  ): Promise<void> {
    const productVariantId = Number(req.params.id);

    const productVariant =
      await productVariantDB.default.getProductVariantById(productVariantId);

    if (productVariant) {
      res.status(200).json(productVariant);
    } else {
      res.status(404).json({
        message: `product variant with id ${productVariantId} not found`,
      });
    }
  }

  public async deleteProductVariantById(
    req: Request,
    res: Response
  ): Promise<void> {
    const productVariantId = Number(req.params.id);

    if (!productVariantId) {
      res.status(400).json({
        message: `Invalid product variant ID`,
      });
      return;
    }
    try {
      await productVariantDB.default.deleteProductVariantById(productVariantId);
      res.status(200).json({
        message: `Product variant with id: ${productVariantId} deleted successfully`,
      });
    } catch (e: any) {
      res.status(500).json({ message: `Something went wrong: ${e.message}` });
    }
  }

  public async updateProductVariant(
    req: Request,
    res: Response
  ): Promise<void> {
    const productVariantId = Number(req.params.id);
    const updateProductVariant = req.body as ProductVariantsParams;

    if (updateProductVariant.variantId !== productVariantId) {
      res.status(400).json({
        message: `Product variant ID in request body (${updateProductVariant.variantId}) does not match product ID in URL (${productVariantId})`,
      });
      return;
    }
    try {
      const updated = await productVariantDB.default.updateProductVariant(
        productVariantId,
        updateProductVariant
      );
      if (!updated) {
        res.status(404).json({
          message: `Product variant with id ${productVariantId} not found`,
        });
      } else {
        res.status(200).json(updateProductVariant);
      }
    } catch (e: any) {
      res.status(500).json({ message: `Server error: ${e.message}` });
    }
  }
}

export default new ProductVariantController();
