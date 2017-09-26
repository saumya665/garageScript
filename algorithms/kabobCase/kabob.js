const express = require("express");
const app = express();

const convert=(word)=>{
  var str = word;
  var splitWord = str.split("");
  splitWord.forEach((e, index)=>{
    if(e ==e.toUpperCase()){
      e = e.toLowerCase();
      splitWord[index]="-"+e;
    }
  })
  console.log(splitWord);
}
convert("helloMing");

//expected output: -hello-World
