//program to print all names besides your own onto the browser using express
const f = require("fs");
const express = require("express");
const app = express();
app.listen(3615);
const myfunc = (re1,re2)=>{
  const printFunc=(err,files)=>{
    let allNames = " ";
    files.forEach((name)=>{
      if(name!="saumya")
        allNames = allNames + " " +name;
  })
    re2.send(allNames);
  };
  f.readdir("/home", printFunc);
};
app.get("/name", myfunc);
