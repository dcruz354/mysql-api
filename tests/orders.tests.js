const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//const token =
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2NzE0MDA3LCJleHAiOjE2MDY4MDA0MDd9.TiTQxbgVnYWfksB7EhCLEgYXFnTVDi04l8eXTrUOa30';

describe('Orders API Service', function () {

 /*
    it('should GET all orders', function (done) {
      chai
        .request('http://localhost:3000')
        .get('/api/orders')
        .set('Authorization', `Bearer ${token}`)
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.a('array');
          expect(resp.body.length).to.not.be.eql(0);
          done();
        });
    });

  
    it('should GET a single order', function (done) {
      const expected = [
        {
          order_number: 1,
          order_name: "I'm the first order!",
          created_date: '2020-11-29 22:30:27',
          status: 'pending',
        },
      ];
  
      chai
        .request('http://localhost:3000')
        .get('/api/orders/1')
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.a('array');
          expect(resp.body.length).to.not.be.eql(0);
          expect(resp.body).to.be.eql(expected);
          done();
        });
    });

  
    it.skip('should POST a single order', function (done) {
      const newOrder = {
        order_name: 'New test order!',
      };
      const expected = { msg: 'Add order successfully!' };
  
      chai
        .request('http://localhost:3000')
        .post('/api/orders')
        .send(newOrder)
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.eql(expected);
          done();
        });
    });

    */
  });