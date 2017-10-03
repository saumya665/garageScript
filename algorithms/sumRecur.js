const RecurSum=(array,i=0,total=0)=>{
  if(i==array.length){
    return total;
  }
  else{
    total = total + array[i];
   return RecurSum(array, i+1,total);
  }
}
console.log(RecurSum([1,3,5,5]));

