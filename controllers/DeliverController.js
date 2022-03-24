const Deliver = require('../models/Deliver');

exports.crearDeliver = async(req, res) => {
    try {
        let deliver_data;
        deliver_data = new Deliver(req.body);
        await deliver_data.save();
        res.send(deliver_data);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups, no se ha logrado guardar el nuevo Deliver')
    }
}

exports.encontrarDeliver = async(req, res) => {
    try {
        const deliver_data = await Deliver.findById(req.params.id);

        if (!deliver_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' });
        }
        res.json(deliver_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.obtenerDelivers = async(req, res) => {
    try {
        const deliver_data = await Deliver.find();
        res.json(deliver_data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.actualizarDeliver = async(req, res) => {
    try {
        const { nombre, direccion, telefono, correoElectronico } = req.body
        let deliver_data = await Deliver.findById(req.params.id);

        if (!product_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        deliver_data.nombre = nombre;
        deliver_data.direccion = direccion;
        deliver_data.telefono = telefono;
        deliver_data.correoElectronico = correoElectronico;

        deliver_data = await Deliver.findByIdAndUpdate({ _id: req.params.id }, deliver_data, { new: true })
        res.json(deliver_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.eliminarDeliver = async(req, res) => {
    try {
        const deliver_data = await Deliver.findById(req.params.id);
        if (!deliver_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar productos' })
        }

        await Deliver.findByIdAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'Deliver eliminado con éxito.' })

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}