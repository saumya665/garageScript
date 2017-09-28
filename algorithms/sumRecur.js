const RecurSum=(array,i=0,total=0)=>{
  if(i==array.length){
    console.log(total);
  }
  else{
    total = total + array[i];
   return RecurSum(array, i+1,total);
  }
}
RecurSum([1,3,5,5]);

