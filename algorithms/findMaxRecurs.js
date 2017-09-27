const findMax=(a,i=0,max=0)=>{
  if(i==a.length-1){
    console.log(max);
  }
  else{
    if(a[i]< a[i+1]){
      max = a[i+1];
    }
    i = i+1;
      findMax(a,i, max);
  }
}
findMax([5,7,6]);
