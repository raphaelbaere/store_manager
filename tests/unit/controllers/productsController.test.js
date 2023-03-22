const { allProducts, oneProduct } = require('../../mocks/mocks');
const { listProducts, listProductById, createProduct } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

describe('Testa Controller', function () {
  it('responde status 200 e objeto com resultado, na rota /products', async function() {
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findAll')
      .resolves({ type: null, message: allProducts });

    await listProducts(undefined, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);

    sinon.restore();
  });
    it('responde status 200 e objeto com resultado, na rota /products:id', async function() {
      const res = {};
      const req = {};

      req.params = {
        id: 1
      }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findById')
      .resolves({ type: null, message: oneProduct });

    await listProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(oneProduct);

    sinon.restore();
    });
      it('responde status 200 e objeto com criado resultado, na rota /products', async function() {
      const res = {};
      const req = {};

      req.body = oneProduct

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'createProduct')
      .resolves({ type: null, message: oneProduct });

    await createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(oneProduct);

    sinon.restore();
  });
});