
import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { UserParams } from '../models';
import { authService } from "../services";

export const authRoutes = express.Router(); 

  authRoutes.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' }));

  authRoutes.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const user = req.user as UserParams;
    const token = jwt.sign({ userId: user.userId, email: user.email }, 'ME_SECRET_KEY', {
      expiresIn: '1h' 
    });

    // Omdirigera användaren till din frontend med token
    res.redirect(`http://localhost:3000/shop?token=${token}`);
});

authRoutes.get('/protected', (req, res) => {
  res.send(`Hello ${req.user}`);
});


authRoutes.get("/users", async (req, res) => {
  const userList = await authService.default.getAllUsers();
  console.log(userList);
  res.status(200).json(userList);
});

authRoutes.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  await authService.default.deleteUserById(id);
  res.status(200).json(`${id} deleted successfully`);
});



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
