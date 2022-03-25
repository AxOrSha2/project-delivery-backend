const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
//
router.post('/',productController.createProduct);
router.get('/',productController.getProducts);
router.get('/:id',productController.findProduct);
router.put('/:id',productController.updateProducts);
router.delete('/:id',productController.deleteProduct);
//
module.exports = router