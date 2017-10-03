findMin=(num1,num2)=>{
  if(num1<num2){
    return num1;
  }
  else{
    return num2;
  }
}

const numTimes=(num1, num2,funct,i=1)=>{
  if(i==findMin(num1,num2)+1){
    return;
  }
  else{
    funct(i);
  }

  return numTimes(num1, num2,funct, i+1);
}

numTimes(5,2,(i)=>{
  console.log(i)});
