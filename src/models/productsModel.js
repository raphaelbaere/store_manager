const connection = require('../db/connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [productId]);
  return result;
};

const insert = async (product) => {
  const [{ insertId }] = await
    connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)',
    [product]);
  return insertId;
};

const update = async (productId, name) => {
  const [updated] = await connection
    .execute(`UPDATE StoreManager.products
SET name = ?
WHERE ?;`,
      [name, productId]);
  return updated;
};

const insertSaleDate = async () => {
  const [{ insertId }] = await
    connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  return insertId;
};

const insertSale = async (saleId, productId, quantity) => {
  await connection
.execute('INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity]);
};

module.exports = {
  findAll,
  findById,
  insert,
  insertSale,
  insertSaleDate,
  update,
};