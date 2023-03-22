const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, oneSale, oneSaleWithoutID } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar as vendas através do service findAll', async () => {
    sinon.stub(salesModel, 'findAll')
      .resolves(allSales);
    
    const result = await salesService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allSales);
  });
    it('Testa se é possível recuperar a venda através do service findById', async () => {
    sinon.stub(salesModel, 'findById')
      .resolves(oneSale);
    
    const result = await salesService.findById();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(oneSaleWithoutID);
  });
})