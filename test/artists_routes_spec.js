'use strict';

var req     = require('supertest'),
    should  = require('should'),
    app     = require('../app'),
    Artist  = require('../models/Artist'),
    artist, artist2;

describe('Application tests', function () {
  describe('Requests to the /artists', function () {
    before(function (done) {
      artist = new Artist({first_name: 'Sammy', last_name: 'Isseyegh'});
      artist.save(function (err, artist) {
        artist2 = new Artist({first_name: 'Sammy1', last_name: 'Isseyegh1'});
        artist2.save(function (err, artist) {
          done();
        });
      });
    });

    describe('Get request to /artists', function () {
      it('returns two artists', function (done) {
        req(app)
          .get('/artists')
          .end(function (err, result) {
            if (err) throw err;
            done();
          });
        });
    });
  }); 
});
