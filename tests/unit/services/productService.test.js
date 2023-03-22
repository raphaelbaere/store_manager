const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { allProducts, oneProduct } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar os produtos através do service findAll', async () => {
    sinon.stub(productsModel, 'findAll')
      .resolves(allProducts);
    
    const result = await productsService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allProducts);
  });
    it('Testa se é possível recuperar o produto através do service findById', async () => {
    sinon.stub(productsModel, 'findById')
      .resolves(oneProduct);
    
    const result = await productsService.findById();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(oneProduct);
  });
})