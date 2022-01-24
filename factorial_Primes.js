//Factorial
fact=(n)=>{
    if(n==0)
        return console.log(1);
    let val=1;
    for(let i=1;i<=n;i++){
        val=val*i;
    }
    console.log(val);
}

refact= (n)=>{

}
// fact(0);
// refact(5);
//Prime or Composite 
primeOrComposite=(n)=>{
    if(n<0)
        return console.log('not sure!')
    if(n==0 || n==1 )
        return console.log(`${n} is neither Prime nor Composite`)

    let flag=0;      
    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=1;
            break;
        }
    }
    if(flag==1)
        console.log(`${n} is Composite`)
    else
        console.log(`${n} is Prime`)
}
//primeOrComposite(0);

//All primes
function primes(n){
    let flag=0;let arr=[];
    for(j=2;j<=n;j++){
        flag=0;
        for(i=2;i<j;i++){
            
            if(j%i==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            arr+=j+' ';   
        }
    }
    console.log(arr);
}
reprime = ()=>{

}
primes(38);
//reprimes(20);


sumN=(n,i,sum)=>{
    i++;
    if(n==i-1)
        return console.log(sum); 
    sum+=i;
    sumN(n,i,sum);
}
//sumN(100,0,0);

//GCD

//LCM