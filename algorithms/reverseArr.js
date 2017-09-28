const reverseArr=(arr,i=arr.length-1, newArr= [])=>{
  if(i==-1){
    return newArr;
  }
  else {
    newArr.push(arr[i]);
  }
  return reverseArr(arr,i-1,newArr);
}
console.log(reverseArr([1,5,2]));
