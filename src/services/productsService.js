const productsModel = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const productById = await productsModel.findById(productId);
  if (!productById) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: productById };
};

const createProduct = async (product) => {
  const { name } = product;
  const insertId = await productsModel.insert(product);
  return { type: null, message: { id: insertId, name } };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};