const { productsModel } = require('../models');

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

const updateProduct = async (productId, name) => {
  const productById = await productsModel.findById(productId);
    if (!productById) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  await productsModel.update(productId, name);
  const productUpdated = await productsModel.findById(productId);
  return { type: null, message: productUpdated };
};

const deleteProduct = async (productId) => {
  const productById = await productsModel.findById(productId);
  if (!productById) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
    await productsModel.deleteProduct(productId);
  return { type: null, message: null };
};

const createSale = async (sales) => {
  const saleId = await productsModel.insertSaleDate();
  await Promise.all(sales.map(({ productId, quantity }) =>
    productsModel.insertSale(saleId, productId, quantity)));
  return { type: null, message: { id: saleId, itemsSold: sales } };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  createSale,
  updateProduct,
  deleteProduct,
};