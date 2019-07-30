const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const contentParser = require('./contentParser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'index.html'));
});

// not implemented for now
app.post('/login', (req, res) => {
  console.log(contentParser(req.body.pwd))
})

app.post('/', function(req,res){
  const ws = fs.WriteStream(path.join(__dirname,'content_files',req.body.filename), (err) => {
    if(err) throw new Error(err)
});
  ws.write(req.body.content);
  ws.end();
  res.send(`FILE CREATED successfully: ${req.body.filename} \n and added Content: ${req.body.content}`);
});

app.listen(7000, function(){
  console.log('Listening on port 7000');
});

