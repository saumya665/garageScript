
const createStr =(word,num, i=0)=>{
  let emptyStr = " ";
  if(i==num){
    return emptyStr; 
  } else{
   console.log(word);
    i=i+1;
    createStr(word, num, i);
  }
}
createStr('hello',3);
