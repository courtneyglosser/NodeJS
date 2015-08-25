

var express = require('express')
var path = require('path')
var app = express()


app.get('/home', function(req, res) {
  res.end('Hello World!')
})

//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public') || process.argv[3] ));

app.listen(process.argv[2])

