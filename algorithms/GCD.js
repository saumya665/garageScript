const gcd=(a, b, i=0, ans=0)=>{
  if(i>=a || i>=b){
    return ans;
  }
  if(a%i==0 && b%i==0){
    ans =i;
  }
  return gcd(a,b,i+1,ans);
}
console.log(gcd(10,15));
