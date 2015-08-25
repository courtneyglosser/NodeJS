
var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, ext, callback) {
	var output = fs.readdir(dirPath, function (err, dirList) {
		if(err) {
			return callback(err);
		}
		var output = dirList.filter(function (n) {
			return path.extname(n) === '.' + ext;
		});

		return callback(null, output);
	});

}



