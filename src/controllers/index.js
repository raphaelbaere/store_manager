const productsService = require('../services');
const errorMap = require('../utils');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const listProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { type, message } = await productsService.createProduct(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const createSale = async (req, res) => {
  const { type, message } = await productsService.createSale(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  listProducts,
  listProductById,
  createProduct,
  createSale,
};