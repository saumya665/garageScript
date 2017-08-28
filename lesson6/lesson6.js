const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3615);
app.use(express.static('public'));


app.get('/XMLReq',(req,res)=>{
fs.writeFile('/home/sya/garageScript/lesson6/public/textOut.txt',`Name: ${req.query.nameVal} Comment:  ${req.query.comVal} \n`);
  res.send('Comment has been submitted');
});
