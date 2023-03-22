const express = require('express');
const { listProducts, listProductById, createProduct, updateProduct } = require('../controllers');
const validateProductValues = require('../middlewares/validateProductValues');

const route = express.Router();

route.get('/', listProducts);

route.get('/:id', listProductById);

route.post('/', validateProductValues, createProduct);

route.put('/:id', validateProductValues, updateProduct);

module.exports = route;