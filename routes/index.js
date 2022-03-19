const express = require('express');
//
const deliverRouter = require('./deliver');
//
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/delivers', deliverRouter);
};
//
module.exports = routerApi;