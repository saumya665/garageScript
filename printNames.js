const f = require("fs");
const emptyfunc =()=>{
};

const printFunc=(err,files)=>{
  let allNames = " ";
  files.forEach((oneName)=> {
    if(oneName!="saumya")
      allNames = allNames + " " +oneName;
  });
  f.writeFile("/home/sya/garageScript/writeFile.txt",allNames, emptyfunc);
};
f.readdir("/home",printFunc);
