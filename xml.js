const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3615);
app.use(express.static('public'));

app.get("/XMLHttpRequest",(req,res)=>{
  console.log(req.query);
  fs.appendFile('/home/sya/garageScript/public/xmlPublic.txt', `Name: ${req.query.inBox} Comment: ${req.query.comment}`);
  res.send('done');
});
