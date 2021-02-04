var data = require("../data.json");

exports.addFriend = function(request, response) {   
	var hold = new Object();
	hold = {'name':request.query.name,'description':request.query.description, 'imageURL': 'http://lorempixel.com/400/400/people/'};
	data.friends.push(hold);
	//console.log(data.friends);
	response.render('index', data);
 }