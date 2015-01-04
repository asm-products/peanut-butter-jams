'use-strict';
/**
 * Example Mongoose Model
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Artist = new Schema({
  first_name: {
    required: true,
	  type: String
  },
  last_name: {
  	required: true,
  	type: String
  },
  created: { 
    type: Date, 
    default: Date.now,
    required: true
  },
  updated:  { 
    type: Date, 
    default: Date.now, 
    required: true
  }
});

module.exports = mongoose.model("Artist", Artist);