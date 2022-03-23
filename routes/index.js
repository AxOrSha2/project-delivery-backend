const express = require('express');
//
const deliverRouter = require('./deliver');
const productoRouter = require('./producto');
//
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/delivers', deliverRouter);
    router.use('/productos', productoRouter);
};
//
module.exports = routerApi;