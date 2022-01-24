//O(N)
function gcdBasic(x,y){

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

//Euclidian Algorithm

function gcdEuclidAlgorithm(x,y){

}

function lcmBasic(x,y){

    let n=0,tentative=0;
    let i=x,j=y;
    if(x>y)
        if(x%y==0)
            return x;
        else n=x*y;


    if(y>x)
        if(y%x==0)
            return y;
        else n=x*y;

    if(x==y)
        return x;

    // for(let i=x;i<=n;i=i+x){
    //         for(let j=y;j<=n;j=j+y){
    //             if(i==j){
    //                 tentative=i;
    //                 break;
    //             }
    //             console.log(i+' '+j)       
    //         }
    //     }

    if(tentative !=0)
        return tentative;
    else
        return x*y;

}

console.log(lcmBasic(100,450));