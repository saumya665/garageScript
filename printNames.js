const f = require("fs");
const emptyfunc =()=>{
};

const printFunc=(err,files)=>{
  let myStr = " ";
  files.forEach((e)=> {
    if(e!="saumya")
      myStr = myStr + " " +e;
  });
  f.writeFile("/home/sya/garageScript/writeFile.txt",myStr, emptyfunc);
};
f.readdir("/home",printFunc);
