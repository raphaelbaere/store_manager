const express = require('express');
const { listProducts, listProductById } = require('../controllers');

const route = express.Router();

route.get('/', listProducts);

route.get('/:id', listProductById);

module.exports = route;