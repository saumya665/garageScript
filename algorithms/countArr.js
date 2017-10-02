const countArr=(num, arr, i=0,count=0)=>{
  if(i==arr.length){
    return count;
  }
  if(num==arr[i]){
    count=count+1;
  }
  return countArr(num, arr, i+1,count);
}
console.log(countArr(5,[1,5,5]));
