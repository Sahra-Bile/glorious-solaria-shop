import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class Middleware {
  handleValidationError(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error("Validation Error:", errors.array());
      return res.status(400).json({
        error: true,
        message: "Validation errors",
        details: errors.array()[0],
      });
    }
    next();
  }
}

export default new Middleware();
