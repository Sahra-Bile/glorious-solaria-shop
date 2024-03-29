import { body, param, query } from "express-validator";

class ProductValidator {
  checkCreatedProduct() {
    return [
      body("productId")
        .optional()
        .isInt()
        .withMessage(
          "The productId should be number and should not empty"
        ),
      body("productName")
        .notEmpty()
        .withMessage("The  product name value should not empty"),
      body("description")
        .notEmpty()
        .withMessage("The description value should not empty"),
      body("image")
        .notEmpty()
        .withMessage("The image value should not empty"),
      body("categoryId")
        .notEmpty()
        .isNumeric()
        .withMessage("The categoryId value should not be empty"),
    ];
  }

  checkUpdatedProduct() {
    return [
      body("productId")
        .notEmpty()
        .isInt()
        .isNumeric()
        .withMessage("The id  value must be fill even when updating"),
      body("productName")
        .notEmpty()
        .withMessage("The  product name value must be fill even when updating"),
      body("description")
        .notEmpty()
        .withMessage("The description value must be fill even when updating"),
      body("image")
        .notEmpty()
        .withMessage("The image value must be fill even when updating"),
      body("categoryId")
        .notEmpty()
        .isNumeric()
        .withMessage("The categoryId  value must be fill even when updating"),
    
    ];
  }

  checkIdParam() {
    return [
      param("id")
        .notEmpty()
        .withMessage("The value should not empty")
        .isInt()
        .withMessage("  the  id value should be  a nr"),
    ];
  }
}
export default new ProductValidator();
