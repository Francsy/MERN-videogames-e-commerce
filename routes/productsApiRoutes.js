const express = require('express');
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();

productsApiRouter.get('/', productsApiController.getAll)
productsApiRouter.get('/name', productsApiController.getAllSortByName)
productsApiRouter.get('/relevance', productsApiController.getAllSortByRelevance)
productsApiRouter.get('/price', productsApiController.getAllSortByPrice)
productsApiRouter.get('/:id', productsApiController.getProductInfo)

module.exports = productsApiRouter;