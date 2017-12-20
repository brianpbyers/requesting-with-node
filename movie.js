const request = require('request');
const codes = require("./env");
const KEY = codes.KEY;
const searchId = codes.searchId;

function get(film){
	while(film.includes(' ')){
		film = film.replace(' ','+');
		console.log(film);
	}
	request('https://www.googleapis.com/customsearch/v1?key=' + KEY + '&cx=' + searchId + '&q=' + film, function(error, request, body){
		let info = JSON.parse(body);
		for(let i = 0; i<(Math.min(5,info.items.length)); ++i){
			console.log('Title: ' + info.items[i].title);
			console.log('From: ' + info.items[i].displayLink);
			console.log(info.items[i].snippet);
			console.log(' ');
			console.log(' ');
			console.log(' ');
		}
	});
}

module.exports = get;