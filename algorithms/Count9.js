const count9=(word, i=0, count=0)=>{
  if(i==word.length){
  return count;
  }
  if(9 ==word[i]){
    count = count+1;
  }
   return count9(word,i+1, count);
}
console.log(count9('5son9birt9'));
