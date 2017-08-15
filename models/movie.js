const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var movieSchema = new Schema({
	image: {
		type: String,
	},
	title: {
		type: String
	},
	overview: {
		type: String
	},
	genre: {
		type: String
	}
});

module.exports = mongoose.model('movies', movieSchema)