var express = require('express');
var app = express();
app.use(express.static(__dirname )); //if u dont include this line css and other files won't be accessible
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});