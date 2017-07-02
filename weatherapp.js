var express = require("express");
var app     = express();
var path    = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Weather.html'));
});


app.listen(PORT, function () {
	console.log('Hello from port : ' + PORT);
});
