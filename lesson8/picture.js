const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3615);
app.use(express.static('public'));
app.use(bodyParser.json({limit: '500mb' }));

app.post('/submit', (req,res)=>{
  fs.writeFile('/home/sya/garageScript/lesson8/public/textOut.txt', ` Name: ${req.body.name} Comment: ${req.body.comment} `);
  res.send('POST request has been received');
})

app.post('/pics', (req,res)=>{
  res.send('You took a picture');
})
