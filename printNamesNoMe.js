const f  = require("fs");
const express = require("express");
const app = express();

app.listen(3615);

const myfunc = (re1,re2)=>{
  const printfunc = (err,files)=>{
    let allNamesNoMe = " ";
    files.forEach((Name)=>{
      if (Name!="saumya")
        allNamesNoMe = allNamesNoMe + " " + Name;
    })
      re2.send(allNamesNoMe);
   };
  f.readdir("/home", printfunc);
};
app.get("/", myfunc);
