const addNumbers = require('./addNumbers.js');

const test=(a,b,c)=>{
  if(addNumbers(a,b)==c)
  {
    console.log("Your program is working propery");
  } else {
    console.log("Your program is not adding numbers properly");
  }
}
test(3,5,8)
test(1,1,3);
