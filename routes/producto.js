const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductController');
//
router.post('/',productoController.crearProducto);
router.get('/',productoController.obtenerProducto);
router.get('/:id',productoController.encontrarProducto);
router.put('/:id',productoController.actualizarProducto);
router.delete('/:id',productoController.eliminarProducto);
//
module.exports = router