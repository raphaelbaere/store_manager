const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/connection');
const { salesModel, productsModel } = require('../../../src/models');
const { allSales, oneSale } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar as vendas através do model findAll', async () => {
    sinon.stub(connection, 'execute')
      .resolves([allSales]);
    
    const result = await salesModel.findAll();

    expect(result).to.be.deep.equal(allSales);

    sinon.restore();
  });
    it('Testa se é possível recuperar a venda através do model findById', async () => {
    sinon.stub(connection, 'execute')
      .resolves([oneSale]);
    
    const result = await salesModel.findById();

    expect(result).to.be.deep.equal(oneSale);

    sinon.restore();
    });
      it('Testa se é possível inserir uma venda através do model insertSale', async () => {
    sinon.stub(connection, 'execute')
      .resolves([{ insertId: 1 }]);
    
        const result = await productsModel.insertSaleDate();
        await productsModel.insertSale(1, 1, 1)

    expect(result).to.be.deep.equal(1);

    sinon.restore();
  });
})