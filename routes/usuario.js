const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController')
    //
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.encontrarUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);
//
module.exports = router;