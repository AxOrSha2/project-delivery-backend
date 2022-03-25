const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    supplier:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    unitsAvailable:{
        type: Number,
        required: true
    } 
},{
    collection: 'Product'
})

module.exports = mongoose.model('product',productSchema)