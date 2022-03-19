const express = require('express');
const router = express.Router();
const deliverController = require('../controllers/DeliverController');
//
router.post('/',deliverController.crearDeliver);
router.get('/',deliverController.obtenerDelivers);
router.get('/:id',deliverController.encontrarDeliver);
router.put('/:id',deliverController.actualizarDeliver);
router.delete('/:id',deliverController.eliminarDeliver);
//
module.exports = router;