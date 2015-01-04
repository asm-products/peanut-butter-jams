'use strict';

var req     = require('supertest'),
    should  = require('should'),
    app     = require('../app'),
    Artist  = require('../models/Artist'),
    artist;

describe('Artist unit tests', function () {
  describe('Creates an Artist instance with correct data', function () {
    before(function (done) {
      artist = new Artist({first_name: 'Sammy', last_name: 'Isseyegh'});
      done();
    });
    it('has a first_name string Sammy', function (done) {
      artist.first_name.should.eql('Sammy');
      done();
    });
    it('has a last_name string Isseyegh', function (done) {
      artist.last_name.should.eql('Isseyegh');
      done();
    });
  });
});
