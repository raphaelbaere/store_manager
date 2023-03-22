const express = require('express');

const { validateSales, validateSalesProduct } = require('../middlewares/validateSales');
const { createSale } = require('../controllers');

const route = express.Router();

route.post('/', validateSales, validateSalesProduct, createSale);

module.exports = route;