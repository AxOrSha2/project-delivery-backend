const mongoose = require('mongoose');
require('dotenv').config({path: 'config.env'});

const connectToMongoDB = async () => {
    try {
        console.log('Iniciando la conexión con MongoDB');
        await mongoose.connect(process.env.DB_MONGO);
        console.log('La conexión con mongo fue exitosa');
    } catch (error) {
        console.log('Hubo un error al intentar conectarce son Mongo');
        console.log(error);
    }
}

const closeMongoDB = async () => {
    if (mongoose.connection) {
        try {
            console.log('Closing connection :O.');
            mongoose.connection.close();
            console.log('Connection closed :].');
        } catch (e) {
            console.log('An error has been ocurred during closing connection :[.');
        }
    }
}

const closeSubscribe = async () => {
    process.on('exit',closeMongoDB);
    process.on('SIGINT',closeMongoDB);
    process.on('SIGTERM',closeMongoDB);
    process.on('SIGKILL',closeMongoDB);
    process.on('uncaughtException',closeMongoDB);
}


exports.connectToMongoDB = connectToMongoDB;
exports.closeMongoDB = closeMongoDB;
exports.closeSubscribe = closeSubscribe;