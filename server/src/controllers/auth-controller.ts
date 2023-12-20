
import type { UserParams } from "../models";
import { Request, Response } from "express";
import { authService } from "../services";

class AuthController {


  public async login(req: Request, res: Response): Promise<void> {
    const user = req.body as Omit<UserParams, "userId">;
    if (!user.googleUserId) {
      res.status(400).json({
        mgs: "must specify property googleUserId",
      });
    }
    try {
      const token = await authService.default.initializePassport();
      res.status(201).json({ token });
    } catch (e) {
      res.status(500).json({ mgs: "something went wrong" });

    }catch (e) {
      res.status(500).json({ mgs: "something went wrong" });
    }
    
  }
}



export default new AuthController();
