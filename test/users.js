let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://127.0.0.1:5000';
const assert = require('chai').assert


describe('users controllers ', () => {

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


  let users = []

  callbackDelete = function (user) {
    chai.request(url)
      .delete('/user/' + user.public_id)
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  }

  it('should get all users', (done) => {
    chai.request(url)
      .get('/users')
      .end(function (err, res) {
        users = res.body.users;

        for (let index = 0; index < users.length; index++) {
          const user = users[index];
          //it('should delete this ' + user.public_id, callbackDelete(user))
        }

        expect(res).to.have.status(200);
        done();    // <= Test completes before this runs
      });
  })
})





