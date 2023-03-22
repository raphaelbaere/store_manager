const joi = require('joi');

const validateProductSchema = joi.object({
  id: joi.number().integer().min(1).required(),
  name: joi.string().min(5).required(),
});

module.exports = validateProductSchema;
