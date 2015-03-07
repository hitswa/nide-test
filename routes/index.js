exports.index = function(req, res) {
	//res.send('<h1>Hello Express</h1>'); // send is not good to use batter to use templating either JADE or EJS
	//res.render('default'); // hetting EJS template from "/viewes/defailt.ejs" file
	res.render('default', {
		title: 'Home',
		classname: 'home',
		users: ['Hitesh', 'Shubh', 'Twinkle', 'Tulika']
	}); // getting data in template from an object, json or anything else
}

exports.about = function(req, res) {
	//res.send('<h1>Hello Express</h1>'); // send is not good to use batter to use templating either JADE or EJS
	//res.render('default'); // hetting EJS template from "/viewes/defailt.ejs" file
	res.render('default', {
		title: 'About Us',
		classname: 'about'
	}); // getting data in template from an object, json or anything else
}