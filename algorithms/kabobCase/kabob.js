const express = require("express");
const app = express();

const convert=(word)=>{
  let str = word;
  let splitWord = str.split("");
  splitWord.forEach((e, index)=>{
    if(e ==e.toUpperCase()){
      e = e.toLowerCase();
      splitWord[index]="-"+e;
    }
  })
  return(splitWord);
}
console.log(convert("helloMing"));

//expected output: -hello-world
