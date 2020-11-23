const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Orderdetails API Service', function () {
    /* it('should GET all orderdetails', function (done) {
      chai
        .request('http://localhost:3000')
        .get('/api/orderdetails')
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.a('array');
          expect(resp.body.length).to.not.be.eql(0);
          done();
        });
    });
  
    it('should GET a single orderdetail', function (done) {
      const expected = [
        {
          orderNumber: 1,
          customerName: "I'm the first task!",
          created_date: '2020-03-24T05:09:49.000Z',
          status: 'completed',
        },
      ];
  
      chai
        .request('http://localhost:3000')
        .get('/api/orderdetails/1')
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.a('array');
          expect(resp.body.length).to.not.be.eql(0);
          expect(resp.body).to.be.eql(expected);
          done();
        });
    }); */
  
    it.skip('should POST a single order detail', function (done) {
      const newOrderDetail = {
        customerName: 'Pedro Cruz',
      };
      const expected = { message: 'Add order detail successfully!' };
  
      chai
        .request('http://localhost:3000')
        .post('/api/orderdetails')
        .send(newOrderDetail)
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.eql(expected);
          done();
        });
    });
  });