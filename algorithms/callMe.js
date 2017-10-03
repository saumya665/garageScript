const callMe=(num,funct, i=1)=>{
  if(i==num+1){
    return;
  }
  else{
    funct(i);
  }
  return callMe(num,funct,i+1);
}
callMe(3,(i)=>{
  console.log(i)});
