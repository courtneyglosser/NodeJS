
var fs = require('fs');

var fileBuff = fs.readFileSync(process.argv[2]);

var fileString = fileBuff.toString();

var fileSplit = fileString.split("\n");

console.log(fileSplit.length - 1);

