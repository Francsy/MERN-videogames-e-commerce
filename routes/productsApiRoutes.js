const express = require('express');
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();
const paginator = require('../middlewares/paginator')

productsApiRouter.get('/', paginator, productsApiController.getAll)
productsApiRouter.get('/name', paginator, productsApiController.getAllSortByName)
productsApiRouter.get('/relevance', paginator, productsApiController.getAllSortByRelevance)
productsApiRouter.get('/price', paginator, productsApiController.getAllSortByPrice)
productsApiRouter.get('/:id', productsApiController.getProductInfo)

module.exports = productsApiRouter;