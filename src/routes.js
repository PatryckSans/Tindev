const express = require('express');
const DevController = require('./controllers/DevController');
const LikeControllers = require('./controllers/LikeController');
const DislikeControllers = require('./controllers/DislikeController');

const routes = express.Router();

routes.delete('/devs/:devId', DevController.remove);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeControllers.store);
routes.post('/devs/:devId/dislikes', DislikeControllers.store);

module.exports = routes;