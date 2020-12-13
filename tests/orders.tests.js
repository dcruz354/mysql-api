const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const {
  refreshTokens,
  generateAccessToken,
  generateRefreshToken,
} = require('../src/utils/jwt-helpers');

request_user_id = 1;

const token = generateAccessToken(request_user_id, {
      expiresIn: 86400,
});

describe('Orders API Service', function () {
  it.skip('user does not have oders', function (done) {
    const expected = { msg: 'No orders available for this user.' }

    chai
      .request('http://localhost:3000')
      .get('/api/orders')
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, resp) {
        expect(resp.body).to.eql(expected);
        done();
      });
  });
  
  it.skip('should GET all orders', function (done) {
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

  
    it.skip('should GET a single order', function (done) {
      const expected = [
        {
          order_number: 1,
          order_name: "New test order!",
          created_date: '2020-12-11T06:45:49.000Z',
          status: 'pending',
          user_id: 1
        },
      ];
  
      chai
        .request('http://localhost:3000')
        .get('/api/orders/1')
        .set('Authorization', `Bearer ${token}`)
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
      const expected = { msg: 'Added order successfully!' };
  
      chai
        .request('http://localhost:3000')
        .post('/api/orders')
        .set('Authorization', `Bearer ${token}`)
        .send(newOrder)
        .end(function (err, resp) {
          expect(resp.status).to.be.eql(200);
          expect(resp.body).to.be.eql(expected);
          done();
        });
    });
  });