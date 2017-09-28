const createStr =(word,num, i=0,emptyStr = '')=>{
  if(i==num){
    return emptyStr; 
  }
  else{
   emptyStr = emptyStr + word;
   return createStr(word, num, i+1, emptyStr);
  }
}
console.log(createStr('s2',4));
