const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/connection');
const { salesModel } = require('../../../src/models');
const { allSales } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar as vendas através do model findAll', async () => {
    sinon.stub(connection, 'execute')
      .resolves([allSales]);
    
    const result = await salesModel.findAll();

    expect(result).to.be.deep.equal(allSales);

    sinon.restore();
  })
})