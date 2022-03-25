const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        let product_data;
        product_data = new Product(req.body);
        await product_data.save();
        res.send(product_data);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups, no se ha logrado guardar el nuevo Producto')
    }
}

exports.findProduct = async (req, res) => {
    try {
        const product_data = await Product.findById(req.params.id);

        if (!product_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias'});
        }
        res.json(product_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.getProducts = async (req, res) => {
    try {
        const product_data = await Product.find();
        res.json(product_data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.updateProducts = async (req, res) => {
    try {
        const {name, img, description, supplier, price, unitsAvailable} = req.body
        let product_data = await Product.findById(req.params.id);

        if (!product_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        product_data.name = name;
        product_data.img = img;
        product_data.description = description;
        product_data.supplier = supplier;
        product_data.price = price;
        product_data.unitsAvailable = unitsAvailable;

        product_data = await Product.findByIdAndUpdate({_id: req.params.id},product_data, {new: true})
        res.json(product_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product_data = await Product.findById(req.params.id);
        if (!product_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar productos' })
        }

        await Product.findByIdAndRemove({_id:req.params.id});
        res.json({mensaje: 'Producto eliminado con éxito.'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}