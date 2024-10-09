const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Listar productos (público)
router.get('/', productController.getAllProducts);

// Crear producto (requiere autenticación)
router.post('/', authMiddleware, productController.createProduct);

// Crear múltiples productos
router.post('/several', productController.createProducts); 

// Modificar producto (requiere autenticación)
router.put('/:id', authMiddleware, productController.updateProduct);

// Eliminar producto (requiere autenticación)
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
