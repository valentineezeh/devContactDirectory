import chai, { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';
import fakeUserData from './mockData';

const request = supertest(app);


describe('Create Developer Contact', () => {
  describe('When passed invalid data', () => {
    it('should throw an error', (done) => {
      const { invalidEmail } = fakeUserData;
      request.post('/api/v1/developer/contact')
        .set('Content-Type', 'application/json')
        .send(invalidEmail)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(400);
          expect(res.body.errors.mobile[0]).to.equal('Please you have to specify a valid mobile');
          done();
        });
    });
  });

  describe('When passed valid data', () => {
    it('should create a new contact', (done) => {
      const { validDetails } = fakeUserData;
      request.post('/api/v1/developer/contact')
        .set('Content-Type', 'application/json')
        .send(validDetails)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Success! Contact has been created.');
          done();
        });
    });

    it('should throw an error if user email already exist', (done) => {
      const { validDetails } = fakeUserData;
      request.post('/api/v1/developer/contact')
        .set('Content-Type', 'application/json')
        .send(validDetails)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(409);
          expect(res.body.message).to.equal('User with this credentials already exist.');
          done();
        });
    });
  });
});
