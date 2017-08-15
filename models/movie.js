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
	},
	comments: [
		{
			name: {type: String},
			text: {type: String},
			stars: {type: Number}
		}
	]
});

module.exports = mongoose.model('movies', movieSchema)