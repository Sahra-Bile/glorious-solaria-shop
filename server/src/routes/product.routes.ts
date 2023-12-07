import express from 'express'
import ProductController from '../controllers/product-controller'
import ProductValidator from '../validator/product-validator'
import Middleware from '../middleware/middleware'
export const productRoutes = express.Router()

productRoutes.get(
  '/',
  Middleware.handleValidationError,
  ProductController.getAllProduct,
)

productRoutes.get(
  '/:id',
  ProductValidator.checkIdParam(),
  Middleware.handleValidationError,
  ProductController.getProductById,
)

productRoutes.post(
  '/',
  ProductValidator.checkCreatedProduct(),
  Middleware.handleValidationError,
  ProductController.createProduct,
)

productRoutes.put(
  '/:id',
  ProductValidator.checkIdParam(),
  ProductValidator.checkUpdatedProduct(),
  Middleware.handleValidationError,
  ProductController.updateProduct,
)

productRoutes.delete(
  '/:id',
  ProductValidator.checkIdParam(),
  Middleware.handleValidationError,
  ProductController.deleteProductById,
)
