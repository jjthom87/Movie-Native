var express = require('express');
var app = express();

var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var router = require('./services/router');

var db = 
process.env.MONGODB_URI || 
process.env.MONGOHQ_URL || 
'mongodb://localhost/movies';

var router = require('./services/router');

mongoose.connect(db, function(err,res){
	if(err){
		console.log("Error connection to: " + db + '. ' + err);
	} else {
		console.log("Succeeded connecting to: " + db);
	}
});

app.use(morgan('combined'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use('/v1', router);

var PORT = process.env.PORT || 3000;

app.listen(PORT);