const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  NAME_NOT_FOUND: 400,
  INVALID_NAME: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};