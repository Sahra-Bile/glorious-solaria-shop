import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { productRoutes } from "./src/routes/product.routes";
import { categoryRoutes } from "./src/routes/category.routes";
import {colorRoutes} from './src/routes/color.routes'

const app: Application = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/colors", colorRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("We are on home page!");
});

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`SERVER RUNNING ON PORT: http://localhost:${port}`);
    });
  } catch (e) {
    console.log(`we have some error: ${e}`);
    return e;
  }
};

start();
