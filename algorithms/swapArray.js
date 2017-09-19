const myFunc = (A,i,j)=>{
  let temp =0;
  temp = A[j];
  A[j]=A[i];
  A[i]=temp;
  console.log(A);
}
myFunc([1,2,3],0,2);
