const express = require('express');
const DevControllers = require('./controllers/DevController');
const LikeControllers = require('./controllers/LikeController');
const DislikeControllers = require('./controllers/DislikeController');
const DevController = require('./controllers/DevController');

const routes = express.Router();


routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);
routes.post('/devs/:devId/likes', LikeControllers.store);
routes.post('/devs/:devId/dislikes', DislikeControllers.store);

module.exports = routes;