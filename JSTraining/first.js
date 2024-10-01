let m=prompt("Enter the value of M :")
let n=prompt("Enter the value of N :")
let i
let sum=0;
if(m>n){
    console.log(0);
}else{
    for(i=m;i<=n;i++){
        sum+=i*i*i;
    }
    console.log(sum)
}