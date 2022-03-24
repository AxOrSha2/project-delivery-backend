const Producto = require('../models/Producto');

exports.crearProducto = async (req, res) => {
    try {
        let producto_data;
        producto_data = new Producto(req.body);
        await producto_data.save();
        res.send(producto_data);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups, no se ha logrado guardar el nuevo Producto')
    }
}

exports.encontrarProducto = async (req, res) => {
    try {
        const producto_data = await Producto.findById(req.params.id);

        if (!producto_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias'});
        }
        res.json(producto_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        const producto_data = await Producto.find();
        res.json(producto_data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const {nombre, img, descripcion, proveedor, precio, unidadesDiponibles} = req.body
        let producto_data = await Producto.findById(req.params.id);

        if (!producto_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        producto_data.nombre = nombre;
        producto_data.img = img;
        producto_data.descripcion = descripcion;
        producto_data.proveedor = proveedor;
        producto_data.precio = precio;
        producto_data.unidadesDiponibles = unidadesDiponibles;

        producto_data = await Producto.findByIdAndUpdate({_id: req.params.id},producto_data, {new: true})
        res.json(producto_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        const producto_data = await Producto.findById(req.params.id);
        if (!product_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar productos' })
        }

        await Producto.findByIdAndRemove({_id:req.params.id});
        res.json({mensaje: 'Producto eliminado con éxito.'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}