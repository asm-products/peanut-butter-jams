'use strict';

var express         = require('express'),
	  router          = express.Router(),
	  Artist          = require('../models/Artist'),
    bodyParser      = require('body-parser'),
    parseEncoded    = bodyParser.urlencoded({ extended: false });

/**
 * Routes to '/artists' - get/post
 */
router.route('/')
  .get(function (req, res) {
  	Artist.find(req.body, function (err, artists) {
	    if (err) throw err;
	    res.json(artists);
	  });
  })
  .post(parseEncoded, function (req, res) {
  	var artist = new Artist(req.body);
  	artist.save(function (err, artist) {
  		if (err) throw err;
  		res.send(artist);
  	});
  });

/**
 * Routes to '/artists/:name' where name is artists first_name
 */
router.route('/:name')
  .get(function (req, res) {
    Artist.findOne({ first_name: req.params.name })
      .exec(function (err, artist) {
        if (err) throw err;
        if (!artist) {
          res.json({});
        } else {
          res.json(artist);
        }
      });
  });

module.exports = router;