let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://127.0.0.1:5000';
const assert = require('chai').assert
describe('Insert a user: ', () => {
  it('should insert a user', (done) => {
    chai.request(url)
      .post('/user')
      .send({ password: 'OscarMartinez', name: "Croacia", admin: false })
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});

