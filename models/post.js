const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
		type: String,
        required: true
	},
	post: {
		type: String,
        required: true
	},
	email: {
		type: String,
        required: true
	}
	  });
	  /* 
	  writeConcern: {
		j: true,
		wtimeout: 1000
	  }*/

module.exports = mongoose.model('Posts', PostSchema);