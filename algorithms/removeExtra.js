const removeExtra =(inp, i=0, prev='', res='')=>{
  if(i===inp.length){return res};
  if(inp[i]!=prev){
    res = res+inp[i]; 
  }
return removeExtra(inp, i+1, inp[i], res);
}
console.log(removeExtra('helllo'));
