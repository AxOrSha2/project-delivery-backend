require('dotenv').config();
//
const express = require('express');
const { connectToMongoDB, closeSubscribe } = require('../project-delivery-backend/config/db');
const routerApi  = require('./routes');
const cors = require('cors');
//
const app = express();
const port = process.env.PORT || 9000;


// Configurar el middleware para express
app.use(express.json());//Procesar peticiones de cuerpo json
app.use(express.urlencoded());//Procesar parámetros codificados en la URL


// Configurar la conección con MongoDB
connectToMongoDB();
app.use(cors());


//Rutas del backend
routerApi(app);

//Congifurar los observadores para cerrar la conección con mongo cuando el backend es finalizado
closeSubscribe();

//Acceso a los controladores
app.listen(port, () => {
    console.log(`Backend está corriendo en el puerto: ${port}`)
});
