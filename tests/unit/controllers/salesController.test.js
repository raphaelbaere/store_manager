const { allSales, oneSale, updatedSales } = require('../../mocks/mocks');
const { listSales, listSaleById, createSale, updateSale } = require('../../../src/controllers');
const { salesService, productsService } = require('../../../src/services');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

describe('Testa Controller', function () {
  it('responde status 200 e objeto com resultado, na rota /sales', async function() {
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findAll')
      .resolves({ type: null, message: allSales });

    await listSales(undefined, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);

    sinon.restore();
  });
      it('responde status 200 e objeto com resultado, na rota /sales:id', async function() {
      const res = {};
      const req = {};

      req.params = {
        id: 1
      }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'findById')
      .resolves({ type: null, message: oneSale });

    await listSaleById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(oneSale);

    sinon.restore();
      });
      it('responde status 200 e objeto com resultado atualizado da venda, na rota /sales:id', async function() {
      const res = {};
      const req = {};

      req.params = {
        id: 1
      }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'updateSale')
      .resolves({ type: null, message: updatedSales });

    await updateSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedSales);

    sinon.restore();
      });
        it('responde status 200 e objeto com resultado da venda criada, na rota /sales', async function() {
          const res = {};
          const req = {};
          
          req.body = oneSale;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'createSale')
      .resolves({ type: null, message: oneSale });

    await createSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(oneSale);

    sinon.restore();
      });
});