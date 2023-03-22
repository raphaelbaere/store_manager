const { allSales, oneSale } = require('../../mocks/mocks');
const { listSales, listSaleById } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
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
});