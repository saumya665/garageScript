const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();

app.listen(3615);
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/submit',(req,res)=>{
  fs.writeFile('/home/sya/garageScript/lesson7/public/inText.txt', `Name: ${req.body.name} Comment: ${req.body.comment}`);
  res.send('Request has been received');
});
