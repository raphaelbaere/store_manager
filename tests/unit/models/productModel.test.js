const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/connection');
const { productsModel } = require('../../../src/models');
const { allProducts } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar os produtos através do model findAll', async () => {
    sinon.stub(connection, 'execute')
      .resolves([allProducts]);
    
    const result = await productsModel.findAll();

    expect(result).to.be.deep.equal(allProducts);

    sinon.restore();
  })
})