const funct=(num, i=0)=>{
  if(i==num){
    return;
  }
  else{
    console.log('hi');
  }
  return funct(num, i+1);
}

const numTimes=(num1, num2)=>{
  if(num1<num2){
    funct(num1);
  }
  else{
    funct(num2);
  }
}

numTimes(5,3);
