import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import app from '../../src/app';

chai.use(chaiHttp);
chai.should();

describe(':: baseRoute', () => {
  it('should respond with HTTP 200 status', async () => {
    const res = await chai
      .request(app)
      .get('/index')
      .catch((err) => {
        if (err.response) {
          return err.response as Response;
        } else {
          throw err;
        }
      });

    res.status.should.equal(200);
  });

  it('should respond with success message', async () => {
    const res = await chai
      .request(app)
      .get('/index')
      .catch((err) => {
        if (err.response) {
          return err.response as Response;
        } else {
          throw err;
        }
      });

    res.body.should.be.an('object');
    res.body.status.should.equal('success');
  });
});
