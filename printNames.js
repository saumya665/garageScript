const fs = require("fs");
const emptyfunc =()=>{
};

const printFunc=(err,files)=>{
  let allNames = " ";
  files.forEach((oneName)=> {
    if(oneName!="saumya")
      allNames = allNames + " " +oneName;
  });
  fs.writeFile("/home/sya/garageScript/writeFile.txt",allNames, emptyfunc);
};
fs.readdir("/home",printFunc);
