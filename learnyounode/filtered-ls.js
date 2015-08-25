
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function verbose (err, dirList) {
	var output = dirList.filter(function unnecessary (n) {
		return path.extname(n) === "." + process.argv[3];
	});

	for (i = 0; i < output.length; i++) {	
		console.log(output[i]);
	}
});
