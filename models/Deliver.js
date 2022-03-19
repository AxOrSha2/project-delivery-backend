const mongoose = require('mongoose');

const deliverSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true
    }
},{
    collection: 'Deliver'
})

module.exports = mongoose.model('deliver',deliverSchema)