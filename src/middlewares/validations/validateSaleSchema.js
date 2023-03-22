const joi = require('joi');

const validateSaleSchema = joi.object({
  productId: joi.number().integer().min(1).required(),
  quantity: joi.number().min(1).required(),
});

module.exports = validateSaleSchema;
