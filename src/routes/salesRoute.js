const express = require('express');

const { validateSales, validateSalesProduct } = require('../middlewares/validateSales');
const { createSale, listSales, listSaleById, deleteSale } = require('../controllers');

const route = express.Router();

route.post('/', validateSales, validateSalesProduct, createSale);

route.get('/', listSales);

route.get('/:id', listSaleById);

route.delete('/:id', deleteSale);

module.exports = route;