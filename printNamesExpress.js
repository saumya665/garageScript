//program to print names with express
const fs = require("fs");
const express = require("express");
const app = express();
app.listen(3615);
const myfunc = (req,res)=>{
  const printFunc=(err,files)=>{
    let allNames = " ";
    files.forEach((name)=>{
      if(name!="saumya")
        allNames = allNames + " " +name;
   });
    res.send(allNames);
  };
  fs.readdir("/home", printFunc);
};
app.get("/name", myfunc);
