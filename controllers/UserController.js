const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'config.env' });

exports.createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const user_data = new User({ name, email, password });

        await user_data.save();
        const token = await jwt.sign({ _id: user_data._id }, process.env.SECRET_KEY);
        res.status(200).json({user_data, token});

    } catch (error) {
        console.log(error)
        res.status(500).send('Ups, no se ha logrado guardar el nuevo Usuario')
    }

}

exports.validateCredentials = async (req, res) => {
    const { email, password } = req.body;

    const user_data = await User.findOne({email});

    if (!user_data) {
        return res.status(401).send('The email doesnt exists');
    }
    if (user_data.password !== password) {
        return res.status(401).send('Wrong password');
    }

    const token = await jwt.sign({ _id: user_data._id }, process.env.SECRET_KEY) 
    return res.status(200).json({token});

}

exports.findUser = async (req, res) => {
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

exports.getUsers = async (req, res) => {
    try {
        const user_data = await User.find();
        res.json(user_data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hay un error, comuniquese con soporte');
    }
}

exports.updateUser = async (req, res) => {
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

exports.deleteUser = async (req, res) => {
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
