const addNumbers = require('./addNumbers.js');

const test=(input1,input2,total)=>{
  if(addNumbers(input1,input2)==total){
    console.log("Your program is working propery!")} 
  else {
    console.log("Your program is not adding numbers properly");
  }
}
test(3,5,8)
test(1,1,3);
