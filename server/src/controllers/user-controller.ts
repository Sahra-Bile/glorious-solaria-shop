import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';

import passport from 'passport';
import jwt from 'jsonwebtoken';


import { authService } from '../services';
import * as utils from '../utils/utils';
import { AddressParams, UserParams } from '../models';



class UserController {

  public registerUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body 
      body.password = utils.hashPassword(body.password);
      body.confirmPassword = utils.hashPassword(body.confirmPassword);
      
      const emailExists = await authService.default.findUserByEmail(body.email);
      if (!emailExists) {
        await authService.default.register(body);
        res.status(201).json(body.email);
      } else {
        res.status(409).json(`User with email ${body.email} already exists!` );
      }
    } catch (error) {
      next(error); 
    }
  });

  public logIn = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await authService.default.logIn(email);
      if (user && utils.comparePassword(password, user.password as string)) {
        const jwtToken = utils.getJWTToken(user);
        res.status(200).json({token: jwtToken});
      } else {
        res.status(401).json( 'Incorrect password' );
      }
    } catch (error) {
      next(error);
    }
  });

  public async getAllUser( req: Request,res: Response) {
    const userList = await authService.default.getAllUsers();
    res.status(200).json(userList);
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);

    const user = await authService.default.getUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ message: `user with id ${userId} not found` });
    }
  }

  public async updateUser(  req: Request, res: Response ): Promise<void> {
    const userId = Number(req.params.id);
    const updatedData = req.body as AddressParams;

    try {
      const updatedUser = await authService.default.updateUseAddress(userId, updatedData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
    
  }


 public async deleteUserById( req: Request,res: Response) {
  const id = Number(req.params.id);
   try {
     await authService.default.deleteUserById(id);
     if (!id) {
       res.status(404).json({ message: `user with id ${id} not found` });
     } else {
       res.status(200).json({
         mgs: ` user with id: ${id} deleted successfully`,
       });
     }
   } catch (e) {
     res.status(500).json({ mgs: `something went wrong` });
   }
 }
  
  
 public googleAuth = asyncHandler((req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' })(req, res, next);
});

public googleAuthCallback = asyncHandler((req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err:any, user: UserParams) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }

    // Generate JWT token
    const token = jwt.sign({ userId: user.userId, email: user.email }, 'ME_SECRET_KEY', {
      expiresIn: '1h'
    });

    // Redirect to the frontend with token
    res.redirect(`http://localhost:3000/checkout?token=${token}`);
  })(req, res, next);
});


}

export default new UserController();
