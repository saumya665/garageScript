const express = require("express");
const app = express();
app.listen(3615);
app.use(express.static('public'));

let tickets = 100;

app.get('/sTicInfo', (req,res)=>{
  const ticketsBought = req.query.numTics;
  tickets = tickets - ticketsBought;
  while(tickets == 100){
    res.send("100 tickets available");
  }
  if(tickets<=0){
    res.send("No more tickets available");
  }
  else {
    res.send(tickets + "");
  }
})

app.get('/refreshSData', (req,res)=>{
  while(tickets == 100){
    res.send("100 tickets available");
  }
  if(tickets<=0){
    res.send("No more tickets available");
  }
  else{
  res.send(tickets+ "");
  }
})

