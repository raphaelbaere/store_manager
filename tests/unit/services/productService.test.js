const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../src/models');
const productService = require('../../../src/services');
const { allProducts } = require('../../mocks/mocks'); 

describe('Testa a model, e...', () => {
  it('Testa se é possível recuperar os produtos através do service findAll', async () => {
    sinon.stub(productModel, 'findAll')
      .resolves(allProducts);
    
    const result = await productService.findAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allProducts);
  })
})