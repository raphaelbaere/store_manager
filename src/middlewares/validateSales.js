const { productsModel } = require('../models');

const validateSales = async (req, res, next) => {
  const sales = req.body;
  if (!sales.every((sale) => sale.productId)) {
    res.status(400)
      .json({ message: '"productId" is required' });
    return;
  }
  if (!sales.every((sale) => sale.quantity !== undefined)) {
    res.status(400)
      .json({ message: '"quantity" is required' });
    return;
  }
  if (sales.every((sale) => sale.quantity < 1 || sale.quantity <= 0)) {
    res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
    return;
  }
  next();
};

const validateSalesProduct = async (req, res, next) => {
  const sales = req.body;
  const salesMap = await Promise.all(sales.map((sale) => {
    const { productId } = sale;
    return productsModel.findById(productId);
  }));
  if (!salesMap.every((saleMap) => saleMap !== undefined)) {
    res.status(404)
      .json({ message: 'Product not found' });
    return;
  }
  next();
};

module.exports = {
  validateSales,
  validateSalesProduct,
};