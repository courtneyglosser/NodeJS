
var http = require('http');

http.get(process.argv[2], function (response) {
	var stream = '';
	response.on('error', function (e) {
		console.log("Error (in): ", e.message);
	});
	response.on('data', function (data) {
		stream += data.toString().replace('\n', '');
	});
	response.on('end', function (data) {
		console.log(stream);
		stream = '';
		http.get(process.argv[3], function (response) { 
			response.on('error', function (e) {
				console.log("Error: ", e.message);
			});
			response.on('data', function(data) {
				stream += data.toString().replace('\n', '');
			});
			response.on('end', function(data) { 
				console.log(stream);
				stream = '';
				http.get(process.argv[4], function (response) { 
					response.on('error', function (e) {
						console.log("Error: ", e.message);
					});
					response.on('data', function(data) {
						stream += data.toString().replace('\n', '');
					});
					response.on('end', function(data) { 
						console.log(stream);
						stream = '';
					});
				});
			});
		});
	}) 
});


