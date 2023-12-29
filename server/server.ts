import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { authService } from './src/services';
import { 
  productRoutes, 
  categoryRoutes, 
  colorRoutes, 
  sizeRoutes, 
  productVariantRoutes, 
  authRoutes 
} from "./src/routes";
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 9000;

//! Konfiguration av CORS, Session, BodyParser
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
app.use(session({
  secret: 'hemlig kod', 
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//! Passport
authService.default.initializePassport();
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/colors", colorRoutes);
app.use("/sizes", sizeRoutes);
app.use("/product-variants", productVariantRoutes);
app.use(authRoutes);


//!Start server
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`SERVER RUNNING ON PORT: http://localhost:${port}`);
    });
  } catch (e) {
    console.log(`OBS server error: ${e}`);
  }
};

start();
