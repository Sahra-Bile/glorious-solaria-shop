import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import {
  productRoutes,
  categoryRoutes,
  colorRoutes,
  sizeRoutes,
  productVariantRoutes,
} from "./src/routes";

const app: Application = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/colors", colorRoutes);
app.use("/sizes", sizeRoutes);
app.use("/productVariants", productVariantRoutes);

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
