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
    sinon.restore();
  });
    it('Testa se é possível recuperar o produto através do service findById', async () => {
    sinon.stub(productsModel, 'findById')
      .resolves(oneProduct);
    
    const result = await productsService.findById();

    expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(oneProduct);
      sinon.restore();
    });
      it('Testa se é possível criar o produto através do service createProduct', async () => {
    sinon.stub(productsModel, 'insert')
      .resolves(1);
    
    const result = await productsService.createProduct(oneProduct);

    expect(result.type).to.be.equal(null);
        expect(result.message).to.be.deep.equal(oneProduct);
        sinon.restore();
      });
        it('Testa se é possível deletar o produto através do service deleteProduct', async () => {
    sinon.stub(productsModel, 'findById')
      .resolves([oneProduct]);
    
    
    const result = await productsService.deleteProduct(1);

    expect(result.type).to.be.equal(null);
          expect(result.message).to.be.deep.equal(null);
          sinon.restore();
        });
          it('Testa se é possível atualizar o produto através do service updateProduct', async () => {
    sinon.stub(productsModel, 'findById')
      .resolves(oneProduct);
            sinon.stub(productsModel, 'update')
            .resolves(1, 'Martelo de Thor')
    
    const result = await productsService.updateProduct(1, 'Martelo de Thor');

    expect(result.type).to.be.equal(null);
          expect(result.message).to.be.deep.equal(oneProduct);
          sinon.restore();
          });
          it('Testa se é possível deletar o produto através do service deleteProduct...', async () => {
    sinon.stub(productsModel, 'findById')
      .resolves([oneProduct]);
    
    
    const result = await productsService.deleteProduct(1);

    expect(result.type).to.be.equal(null);
          expect(result.message).to.be.deep.equal(null);
          sinon.restore();
        });
          it('Testa se é possível procurar o produto através do service searchProduct', async () => {
    sinon.stub(productsModel, 'findAll')
      .resolves(allProducts);
    
    const result = await productsService.searchProducts('Martelo de Thor');

    expect(result.type).to.be.equal(null);
          expect(result.message).to.be.deep.equal([oneProduct]);
          sinon.restore();
  });
})