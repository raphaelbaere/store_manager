const connection = require('../db/connection');

const findAll = async () => {
  const [result] = await connection
    .execute(`
    SELECT
      s.id AS saleId,
      DATE_FORMAT(s.date, '%Y-%m-%dT%H:%i:%s.000Z') AS date,
      sp.product_id AS productId,
      sp.quantity
    FROM
      StoreManager.sales s
      JOIN StoreManager.sales_products sp ON s.id = sp.sale_id
    ORDER BY saleId ASC, productId ASC;
  `);
  return result;
};

const findById = async (saleId) => {
  const [result] = await connection
    .execute(`
    SELECT
      DATE_FORMAT(s.date, '%Y-%m-%dT%H:%i:%s.000Z') AS date,
      sp.product_id AS productId,
      sp.quantity
    FROM
      StoreManager.sales s
      JOIN StoreManager.sales_products sp ON s.id = sp.sale_id
    WHERE s.id = ?;
  `, [saleId]);
  return result;
};

module.exports = {
  findById,
  findAll,
};