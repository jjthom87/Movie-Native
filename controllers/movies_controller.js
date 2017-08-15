var axios = require('axios');
var Movie = require('./../models/movie')

exports.addMovie = function(req, res, next){

	const MOVIE_URL = 'https://api.themoviedb.org/3/movie/'
	const API_KEY = 'cf402e45d0e4ac26a616f28b30eeff01';

	const getMovie = (id) => `${MOVIE_URL}` + id + `?api_key=${API_KEY}&language=en-US`;
	var serbianRequestUrl = getMovie(73861);
	var centipedeRequestUrl = getMovie(37169);
	var kidsRequestUrl = getMovie(9344);

	var imageUrl = 'http://image.tmdb.org/t/p/w185'
	axios.get(kidsRequestUrl).then(function(res){
		if(res.data){

			var data = {
					image: imageUrl + res.data.poster_path,
					title: res.data.title,
					imdb: res.data.imdb_id,
					overview: res.data.overview,
					genre: res.data.genres[0].name
				}
			Movie.insertMany(data)
		}
	});
}

exports.index = function(req, res, next){
	Movie.find({}).exec(function(err, results){
		if(err){
			res.send('OMG ERROR');
		} else {
			res.json(results);		
		}
	});
}