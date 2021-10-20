const express = require('express');
const DevControllers = require('./controllers/DevController');
const LikeControllers = require('./controllers/LikeController');


const routes = express.Router();


routes.post('/devs', DevControllers.store);
routes.post('/devs/:devId/likes', LikeControllers.store);

module.exports = routes;