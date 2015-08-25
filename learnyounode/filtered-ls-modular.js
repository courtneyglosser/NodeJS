
var filterLs = require('./module-filtered-ls');

var another = filterLs(process.argv[2], process.argv[3], function (err, output) {
	for(i = 0; i < output.length; i++) {
		console.log(output[i]);
	}
});


