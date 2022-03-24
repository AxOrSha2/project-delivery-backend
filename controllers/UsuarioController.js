const res = require("express/lib/response");

const Usuario = required('../models/Usuario');

exports.crearUsuario = async(req, res) => {

    try {
        let usuario_data;
        usuario_data = new Usuario(req.body);
        await usuario_data.save();
        res.send(usuario_data);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups, no se ha logrado guardar el nuevo Usuario')
    }
}

exports.encontrarUsuario = async(req, res) => {
    try {
        const usuario_data = await Usuario.findById(req.params.id);
        if (!usuario_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' });
        }
        res.json(usuario_data);

    } catch (error) {
        console.log(error);
        res.status.send('Ups... Hay un error, comuniquese con soporte');

    }
}

exports.obtenerUsuarios = async(req, res) => {
    try {
        const usuario_data = await Usuario.find();
        res.json(usuario_data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hay un error, comuniquese con soporte');
    }
}

exports.actualizarUsuario = async(req, res) => {
    try {
        const { nombre, correoElectronico, contraseñaUsuario } = req.body
        let usuario_data = await Usuario.findById(req.params.id);

        usuario_data.nombre = nombre;
        usuario_data.correoElectronico = correoElectronico;
        usuario_data.contraseñaUsuario = contraseñaUsuario;

        usuario_data = await Usuario.findByIdAndUpdate({ _id: req.params.id }, usuario_data, { new: true })
        res.json(usuario_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.eliminarUsuario = async(req, res) => {
    try {
        const usuario_data = await Usuario.findById(req.params.id);
        if (!usuario_data) {
            res.status(404).json({ mensajes: 'No se encontraron coincidencias para eliminar usuarios' })
        }

        await Usuario.findByIdAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'Usuario eliminado con éxito.' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error,comuniquese con soporte');
    }
}