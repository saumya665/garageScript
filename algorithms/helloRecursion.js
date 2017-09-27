const sayHello=(numPrint, i=0)=>{
  var helloString = " ";
  if(i == numPrint){
    return(helloString);
  }
  else{
    console.log("hello");
    i = i+1;
    sayHello(numPrint, i);
  }
}
sayHello(5);
