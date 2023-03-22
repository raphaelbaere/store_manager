const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar os produtos através do service findAll', async () => {
    sinon.stub(salesModel, 'findAll')
      .resolves(allSales);
    
    const result = await salesService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allSales);
  })
})