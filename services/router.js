const MovieController = require('../controllers/movies_controller');

var router = require('express').Router();

router.route('/getMovies').get(MovieController.index);

router.route('/createMovie').get(MovieController.addMovie);

module.exports = router;