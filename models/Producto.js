const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    proveedor:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    unidadesDisponibles:{
        type: Number,
        required: true
    } 
},{
    collection: 'Product'
})

module.exports = mongoose.model('product',productoSchema)