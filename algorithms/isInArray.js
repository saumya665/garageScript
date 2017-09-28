const isInArr=(a,num,i=0)=>{
  if(i==a.length){
    return false;
  }
  else if(a[i]==num){
  return true; 
  } 
  return isInArr(a,num, i+1);
}
console.log(isInArr([3,5,3],3));
