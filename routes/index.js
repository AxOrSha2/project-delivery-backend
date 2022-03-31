const express = require('express');
//
const deliverRouter = require('./deliver');
const productRouter = require('./product');
const userRouter = require('./user');
//
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/delivers', deliverRouter);
    router.use('/products', productRouter);
    router.use('/users', userRouter);
};
//
module.exports = routerApi;