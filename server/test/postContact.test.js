import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';
import fakeUserData from './mockData';

const request = supertest(app);


describe('Developer Contact Directory Test', () => {
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
    it('should throw an error when pass invalid category', (done) => {
      const { invalidCategory } = fakeUserData;
      request.post('/api/v1/developer/contact')
        .set('Content-Type', 'application/json')
        .send(invalidCategory)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Category most either be frontend, backend or others');
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
  describe('Test Endpoint To Get all contact directories', () => {
    it('should get all contact directories ', (done) => {
      request.get('/api/v1/developer/contact')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          if (err) return done(err);
          done();
        });
    });

    it('should throw an error when category is empty', (done) => {
      const frontend = 'frontend';
      request.get(`/api/v1/developer/contact/?category=${frontend}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return list of all contact in a category', (done) => {
      const backend = 'backend';
      request.get(`/api/v1/developer/contact/?category=${backend}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should throw an error if category does not exist', (done) => {
      const category = 'blank';
      request.get(`/api/v1/developer/contact/?category=${category}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('Category not found.');
          done();
        });
    });
  });

  describe('When passed valid data', () => {
    it('should update developer contact', (done) => {
      const { validDetails } = fakeUserData;
      request.put('/api/v1/developer/contact/1')
        .send(validDetails)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });

    it('should throw an error if contact does not exist', (done) => {
      const { validDetails } = fakeUserData;
      request.put('/api/v1/developer/contact/11')
        .send(validDetails)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('The contact of this developer is not found.');
          done();
        });
    });
  });

  describe('When endpoint get hit', () => {
    it('should delete a developer contact', (done) => {
      request.delete('/api/v1/developer/contact/1')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Success! Contact with Id Number 1 has been deleted.');
          done();
        });
    });

    it('should throw an error if contact does not exist', (done) => {
      request.delete('/api/v1/developer/contact/11')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('The contact of this developer is not found.');
          done();
        });
    });
  });
});
