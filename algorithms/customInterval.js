const printHi=()=>{
  console.log("hi");
}

const customInterval=(a,i=0)=>{ 
  if(i==a.length){
    return;
  }
  else {
    setTimeout(function(){printHi()},a[i]*1000);
  }
  return customInterval(a,i+1);
}
console.log(customInterval([5,10,15]));
