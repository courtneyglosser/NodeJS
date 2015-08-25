
var http = require('http');
var token = '';

var options = {
	hostname : process.argv[2],
	path : '/rest/auth/checkToken',
	method : 'GET',
	headers : {
		'cookie' : 'connect.sid=' + process.argv[3]
	}
};

http.get(options, function (response) {
	response.on('error', function (e) {
		console.log("Error (in): ", e.message);
	});
	response.on('data', function (data) {
		token += data.toString();
	});
	response.on('end', function (data) {
		console.log("end", token);
		asJson = JSON.parse(token);
		console.log(asJson.statusCode);
	});
});

