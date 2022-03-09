//Euclidian Algorithm
function gcd(x, y){
    if(x >= y) {
        let mod=x % y;
        if(mod == 0)
            return y;
        return gcd(y, mod)
    }
    if(y >= x) {
        let  result = gcd(y, x);
        return result;
        }
}

//LCM, the upper limit for LCM??-> using lcm(a,b)* hcf(a,b)= a*b
function lcm(x,y){
    if(x >= y ) {
        if(x % y == 0)
            return y
        return (x*y)/gcd(x,y);
    }
    else {
        if(y % x == 0)
            return x;
        return (x*y)/gcd(x,y);
    }
}

console.log(gcd(12,36));
console.log(gcd(36,6));
console.log(gcd(12,18));
console.log(gcd(18,12));
console.log(gcd(1823424,124));
console.log(gcd(30,75));
console.log(gcd(31,71));

console.log(lcm(30,75));
console.log(lcm(30,60));
console.log(lcm(12,18));
console.log(lcm(12,71));

//Intution
//O(N)
function gcdByDefinition(x,y){

    let n=0,tentative=0;
    let flagX=false,flagY=false;
    if(x>y)
        if(x%y==0)
            return y;
        else
            n=y;
        
    if(y>x)
        if(y%x==0)
            return x;
        else    
            n=x;
    if(x==y)
        return x;

    for(let i=2;i<n;i++){

        if(x%i==0)
            flagX=true;
           
        if(y%i==0)
            flagY=true;

        if(flagX && flagY)
            tentative=i;
        
         flagX=flagY=false;   
    }

    if(tentative !=0)
        return tentative;
    else  
        return 1;

}
//console.log(gcdBasic(100,450));