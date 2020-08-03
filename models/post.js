const mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');

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

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Posts', PostSchema);