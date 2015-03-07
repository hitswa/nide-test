var express = require('express');
var app = express();
var routes = require('./routes')

app.set('view engine', 'ejs');
// if you don't want your templates to be inside default "views" folder then use following
//app.set('viewes', __dirname + '/viewes') // "__dirname" is a global variable that contain path of "app.js"

app.locals.pagetitle = "Awasome Website";

/**
 * ROUTING
 */

// Root route
// creating url http://localhost:3000/
/** MOVING THIS CODE TO "/routes/index.js" FILE
app.get('/', function(req, res) {
	//res.send('<h1>Hello Express</h1>'); // send is not good to use batter to use templating either JADE or EJS
	//res.render('default'); // hetting EJS template from "/viewes/defailt.ejs" file
	res.render('default', {
		title: 'Home',
		classname: 'home',
		users: ['Hitesh', 'Shubh', 'Twinkle', 'Tulika']
	}); // getting data in template from an object, json or anything else
});

app.get('/about', function(req, res) {
	//res.send('<h1>Hello Express</h1>'); // send is not good to use batter to use templating either JADE or EJS
	//res.render('default'); // hetting EJS template from "/viewes/defailt.ejs" file
	res.render('default', {
		title: 'About Us',
		classname: 'about'
	}); // getting data in template from an object, json or anything else
});
*/

/* CODE IN PLACE TO GET ABOVE CODE FROM "/routes/index.js" FILE */
app.get('/', routes.index);
app.get('/about', routes.about);


// Secondary route
// creating url http://localhost:3000/me
app.get('/me', function(req, res) {
	res.send('@hiteshrohilla');
});

// Another route that gets data from parameters available in url
// creating url http://localhost:3000/who/<your-name-here>
app.get('/who/:name?', function(req, res) {
	var name = req.params.name; // express creates a parameter array automaticly
	res.send('Name : ' + name);
});

// Another route that gets data from parameters available in url
// creating url http://localhost:3000/who/<your-name-here>/<your-title-here>
app.get('/who/:name?/:title?', function(req, res) {
	var name = req.params.name; // express creates a parameter array
	var title = req.params.title; // parameter from express array
	res.send('<p>Name: ' + name + '<br>Title: ' + title + '</p>');
});

// Another route to show working of wildcards or regular expressions
// return "Bad route" on calling unexisting url
app.get('*', function(req, res) {
	res.send('Bad route');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});