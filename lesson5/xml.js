const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3615);
app.use(express.static('public'));
app.get("/XMLHttpRequest",(req,res)=>{
  fs.appendFile('/home/sya/garageScript/lesson5/public/xmlPublic.txt', `Name: ${req.query.nameBox} Comment: ${req.query.commentBox}`);
  res.send('done');
});

