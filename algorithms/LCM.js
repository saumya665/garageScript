const LCM=(num1, num2,multiplier=1)=>{
  if(num1*multiplier%num2!=0){
    LCM(num1, num2, multiplier+1);;
  }
  else{
    console.log(num1*multiplier);
  }
}
LCM(5,7);
