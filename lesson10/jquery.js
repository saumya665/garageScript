const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const gm = require("gm");
const fs = require("fs");

app.listen(3615);
app.use(express.static('public'));
app.use(bodyParser.json({limit:'500mb'}));

app.post('/nameCom', (req,res)=>{
  fs.writeFile('/home/sya/garageScript/lesson10/public/ncom.txt', ` Name: ${req.body.name} Comment: ${req.body.comment}`)
  res.send("name and comment have been saved ");
})


app.post('/savePicsAsMemes', (req,res)=>{
  let picData = req.body.canvas.replace('data:image/png;base64',' ');
  let picPath = `/home/sya/garageScript/lesson10/public/pics/${req.body.name}.png`;
  fs.writeFile(picPath, picData, 'base64', ()=>{
    gm(picPath).fontSize(40).drawText(50,50,req.body.comment).write(picPath,(err)=>{})
  })
})
