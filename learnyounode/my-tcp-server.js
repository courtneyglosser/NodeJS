
var net = require('net');
var date = new Date();

var server = net.createServer( function handleRequests (socket) {
	var rtn = date.getFullYear() + '-';
	var month = date.getMonth() + 1;
	if (month < 10) { month = '0' + month; }
	rtn += month + '-';
	rtn += date.getDate() + ' ';
	rtn += date.getHours() + ':';
	rtn += date.getMinutes() + '\n';


	socket.end(rtn);
});

server.listen(process.argv[2]);


