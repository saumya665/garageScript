const express = require("express");
const app = express();
const fs = require("fs");
const gm = require("gm");
const bodyParser = require("body-parser");

app.listen(3615);
app.use(express.static('public'));
app.use(bodyParser.json({limit: '500mb'}));

app.post('/picAsMeme', (req,res)=>{
  let picData = req.body.canvas.replace('data:image/png;base64', ' ');
  let picPath = `/home/sya/garageScript/challenge/public/pics/${req.body.name}.png`;
  fs.writeFile(picPath, picData, 'base64', ()=>{
    gm(picPath).fontSize(40).drawText(50,50,req.body.comment).write(picPath, (err)=>{})
  })
})
//works until this part

app.get('/picInfo', (req, res)=>{
  const updateName=(err,files)=>{
    let picString = " ";
    files.forEach((pic) =>{ 
      picString = picString + `<img src="https://sya.llip.life/pics/${pic}?cacheBusting=${Math.random()}"/>`;
    })
    res.send(picString);
  }
  fs.readdir('/home/sya/garageScript/challenge/public/pics', updateName);
});
