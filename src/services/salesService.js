const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  const salesReformed = sales.map((sale) => ({
    saleId: sale.saleId,
    date: sale.date,
    productId: sale.productId,
    quantity: sale.quantity,
  }));
  return { type: null, message: salesReformed };
};

const findById = async (saleId) => {
  const saleById = await salesModel.findById(saleId);
  if (saleById.length < 1) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
    const salesByIdReformed = saleById.map((sale) => ({
    date: sale.date,
    productId: sale.productId,
    quantity: sale.quantity,
  }));
  return { type: null, message: salesByIdReformed };
};

module.exports = {
  findAll,
  findById,
};