//find smaller value in the array
const findMax = (arr, index=0, max = arr[index])=>{
  if(index==arr.length){
    return max;
  }
  if(max<arr[index]){
    max = arr[index]; 
  }
  return findMax(arr,index+1,max);
}

const maxArrArr=(lArr,i=0,arr=[])=>{
  if(i==lArr.length){
    return arr;
  }
  else{
    arr.push(findMax(lArr[i]));
  }
  return maxArrArr(lArr,i+1,arr);
}
console.log(maxArrArr([[1,9,3],[4,5,1]]));
