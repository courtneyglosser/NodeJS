

if (!process.argv[2]) {
  console.log("Please provide a JS file to run and read.");
  return 0;
}

var resolve = require("path").resolve;

var bunyan = require("bunyan");
var log = bunyan.createLogger({name : "sample"});

var scenario = require(resolve(process.cwd(), process.argv[2]));
scenario(log, function (value) {
  log.info("value at finish is", value);
});

