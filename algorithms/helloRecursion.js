const sayHello=(numPrint, i=0)=>{
  var helloString = " ";
  if(i == numPrint){
    return(helloString);
  }
  else{
    console.log("hello");
    sayHello(numPrint, i+1);
  }
}
sayHello(3);
