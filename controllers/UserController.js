const User = require('../models/User.js');

exports.createUser = async(req, res) => {

    try {
        let user_data;
        user_data = new User(req.body);
        await user_data.save();
        res.send(user_data);
    } catch (error) {
        console.log(error)
        res.status(500).send('Ups, no se ha logrado guardar el nuevo Usuario')
    }

}

exports.findUser = async(req, res) => {
    try {
        const user_data = await User.findById(req.params.id);
        if (!user_data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' });
        }
        res.json(user_data);

    } catch (error) {
        console.log(error);
        res.status.send('Ups... Hay un error, comuniquese con soporte');

    }
}

exports.getUsers = async(req, res) => {
    try {
        const user_data = await User.find();
        res.json(user_data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hay un error, comuniquese con soporte');
    }
}

exports.updateUser = async(req, res) => {
    try {
        const { name, email, password } = req.body
        let user_data = await User.findById(req.params.id);

        user_data.name = name;
        user_data.email = email;
        user_data.password = password;

        user_data = await User.findByIdAndUpdate({ _id: req.params.id }, user_data, { new: true })
        res.json(user_data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const user_data = await User.findById(req.params.id);
        if (!user_data) {
            res.status(404).json({ mensajes: 'No se encontraron coincidencias para eliminar usuarios' })
        }

        await User.findByIdAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'Usuario eliminado con éxito.' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error,comuniquese con soporte');
    }
}
