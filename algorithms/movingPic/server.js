const express = require("express");
const app = express();
const bp = require("body-parser");
app.listen(3615);
app.use(express.static('public'));
app.use(bp.json());

//define global object for the location of the pic
let vertical = 0;
let horizontal = 0;

app.get('/up', (req,res)=>{
  vertical -=50;
  res.send();
});


app.get('/down', (req,res)=>{
  vertical +=50;
  res.send();
})

app.get('/left', (req,res)=>{
  horizontal -= 50;
  res.send();
})

app.get('/right', (req,res)=>{
  horizontal += 50;
  res.send();
})

app.get('/refreshVert', (req,res)=>{
  res.send(vertical+"");
})

app.get('/refreshHorz', (req,res)=>{
   res.send(horizontal+"");
})


