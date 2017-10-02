const funct = ()=>{
  console.log("hi");
}
const callMe=(num, i=0)=>{
  if(i==num){
    return;
  }
  else{
    funct();
  }
  return callMe(num,i+1, funct);
}
callMe(3);
