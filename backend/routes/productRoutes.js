import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getAllCategory,
  getAllBrand,
  getProductsByCategory,
  getProductsByBrand,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router
  .route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);
router
  .route('/:id/reviews')
  .post(protect, checkObjectId, createProductReview);
router
  .get('/top', getTopProducts);
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);
router
  .get('/query/categories',getAllCategory)
  .get('/query/categories/:categoryName',getProductsByCategory)
  .get('/query/brands',getAllBrand)
  .get('/query/brands/:brand',getProductsByBrand);
  
export default router;
