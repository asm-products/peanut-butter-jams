'use strict';

var req     = require('supertest'),
    app     = require('../app');

describe('Application tests', function () {
  describe('Requests to the root path', function () {
    it('returns a 200 status code', function (done) {
      req(app)
        .get('/')
        .expect(200, done);
    });

    it('returns hello world', function (done) {
      req(app)
        .get('/')
        .expect('hello world', done);
    });
  });	
});

