const RecurSum=(array,i=0,total=0)=>{
  if(i==array.length){
    console.log(total);
  }
  else{
    total = total + array[i];
    i = i+1;
   return RecurSum(array, i,total);
  }
}
RecurSum([1,3,5]);

