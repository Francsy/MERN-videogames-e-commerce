const express = require('express');
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();

productsApiRouter.get('/', productsApiController.getAllProducts)
/* 
- Devuelve todos los productos paginados.
- Devuelve productos ordenados por nombre.
- Devuelve productos ordenados por relevancia.
- Devuelve productos ordenados por precio.
- Devolver todos los detalles de un producto con un id dado por un params? */

module.exports = productsApiRouter;