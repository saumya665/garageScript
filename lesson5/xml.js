const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3615);
app.use(express.static('public'));
app.get("/XMLHttpRequest",(req,res)=>{
    console.log(req.query);
  fs.appendFile('/home/sya/garageScript/lesson5/public/xmlPublic.txt', `Name: ${req.query.a1} Comment: ${req.query.a2}`);
    res.send('done');
});

