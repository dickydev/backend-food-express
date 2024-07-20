import express from 'express';
import { getProducts, createProduct, deleteProduct, getProductById, updateProduct, exportToExcel, exportToXML } from '../controllers/productController.js';

const router = express.Router();

// Mendapatkan produk dengan limit
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/export/excel', exportToExcel);
router.get('/export/xml', exportToXML);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;