const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res){
  // console.log(req);
  res.send('This is home page');
});

app.post('/', function(req,res){
  // console.log(req.body.filename);
  // console.log(req.body.content);
  res.send('Post request received for '+req.body.filename+' and '+ req.body.content);
});

app.listen(7000, function(){
  console.log('Listening on port 7000');
});

