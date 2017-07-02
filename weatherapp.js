var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('public'));
//app.use('/', express.static('js'));
//app.use('/', express.static('css'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/weather',function(req,res){
  res.sendFile(path.join(__dirname+'/Weather.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.listen(3000);

console.log("Running at Port 3000");