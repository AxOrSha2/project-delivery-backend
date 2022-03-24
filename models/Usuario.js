const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true
    },
    contrasenaUsuario: {
        type: String,
        required: true
    }
}, {
    collection: 'Usuario'

})

module.exports = mongoose.model('usuario', usuarioSchema)