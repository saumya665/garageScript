const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3615);
app.use(express.static('public'));

app.get("/XMLHttpRequest",(req,res)=>{
  fs.appendFile('/home/sya/garageScript/public/xmlPublic.txt', '\n Name: ${req.query.a1} Comment: ${req.query.a2}\n');
  res.send('done');
});