
var fs = require('fs');
var output = 0;


fs.readFile(process.argv[2], function (err, fileContent) {
	output = fileContent.toString().split('\n').length - 1;
	console.log(output);
})


