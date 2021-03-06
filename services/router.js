const MovieController = require('../controllers/movies_controller');

var router = require('express').Router();

router.route('/getMovies').get(MovieController.index);

router.route('/createMovie').get(MovieController.addMovie);

router.route('/postComment').post(MovieController.addComment);

module.exports = router;