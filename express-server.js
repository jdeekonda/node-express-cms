const express = require('express');

const app = express();

app.get('/', function(req,res){
  res.send('Hello from express server');
});

app.listen(7000, function(){
  console.log('Listening on port 7000');
});

