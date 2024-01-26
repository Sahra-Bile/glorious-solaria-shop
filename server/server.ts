import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { authService } from './src/services';
import {Stripe} from  'stripe';

import { 
  productRoutes, 
  categoryRoutes, 
  colorRoutes, 
  sizeRoutes, 
  productVariantRoutes, 
  authRoutes 
} from "./src/routes";
import dotenv from 'dotenv';
import { ProductItemType } from './src/models';


dotenv.config();
const app: Application = express();
const port = process.env.PORT || 9000;
const stripe = new Stripe((process.env.STRIPE_SECRET as string));



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



// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
  const products = req.body as ProductItemType[]

  const lineItems = products.map(item => {
    return {
      quantity: item.amount,
      price_data: {
        currency: 'usd',
        unit_amount: item.product.price * 100, 
        product_data: {
          name: item.product.productName,
          description: item.product.description,
          images: [item.product.image_2], 
        }
      }
    }
  });


  const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:3000/sucess",
      cancel_url:"http://localhost:3000/cancel",
  });

  res.json({id:session.id})

})


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
