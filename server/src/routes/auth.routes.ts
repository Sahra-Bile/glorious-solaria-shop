import express from 'express';
import session from 'express-session';
import { middleware } from "../middleware";
import {UserController} from '../controllers';

export const authRoutes = express.Router(); 
authRoutes.use(middleware.default.handleValidationError);  

authRoutes.get('/auth/google', UserController.default.googleAuth);
authRoutes.get('/auth/google/callback', UserController.default.googleAuthCallback);

authRoutes.get('/users', UserController.default.getAllUser)
authRoutes.get("/users/:id", UserController.default.getUserById)
authRoutes.post( '/register',UserController.default.registerUser,)
authRoutes.post('/login', UserController.default.logIn,)
authRoutes.put("/users/:id", UserController.default.updateUser)
authRoutes.delete("/users/:id", UserController.default.deleteUserById)
authRoutes.get('/logout', (req, res) => {
  req.logout(() => {
  });
  req.session.destroy((err:any) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.redirect('/'); 
  });
});
