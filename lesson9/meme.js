const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const fs = require('fs');
const gm = require('gm');

app.listen(3615);
app.use(express.static('public'));
app.use(bodyParser.json({limit:'500mb'}));

app.post('/nameComment', (req,res)=>{
  fs.writeFile('/home/sya/garageScript/lesson9/public/textOut.txt', `Name: ${req.body.name} Comment: ${req.body.comment}`);
  res.send('The name and comment have been received');
});

app.post('/pics', (req,res)=>{
  let picData = req.body.canvas.replace('data:image/png;base64', "");
  let picPath = `/home/sya/garageScript/lesson9/public/pics/${req.body.name}.png`;
  let memePath = `/home/sya/garageScript/lesson9/public/meme/${req.body.name}.png`;
  fs.writeFile(picPath,picData,'base64', ()=>{
     gm(picPath).fontSize(40).drawText(50,50,req.body.comment).write(memePath, (err) => { console.log('Meme error: ', err); });
  res.send('Meme has been generated');
  });
})
