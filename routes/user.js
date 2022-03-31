const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
    //
router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.findUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
//
module.exports = router;