const express = require('express');
const { listProducts, listProductById,
  createProduct, updateProduct, deleteProduct } = require('../controllers');
const validateProductValues = require('../middlewares/validateProductValues');

const route = express.Router();

route.get('/', listProducts);

route.get('/:id', listProductById);

route.post('/', validateProductValues, createProduct);

route.put('/:id', validateProductValues, updateProduct);

route.delete('/:id', deleteProduct);

module.exports = route;