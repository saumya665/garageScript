const findLargest =(a)=>{
  let temp =0;
  for(let i =0;i<a.length-1; i++){
    if (a[i]> a[i+1])
      temp = a[i];
  }
  console.log("The largest value is :"+temp);
  }
findLargest([12,20,25,10]);
