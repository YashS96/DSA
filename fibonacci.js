// 0-1-2-3-4-5-6-07-08-09-10th term

//   1,1,2,3,5,8,13,21,34,55....

// T(n)=1		   , n={1,2}	
// T(n)=T(n-1)+T(n-2) , n>2


function fibonacci(n){
let t1=0;let t2=1;let arr=[];let sum=0;
arr=1+' ';
for(let i=0;i<n-1;i++){
	sum=t1+t2; 
    arr+=sum;//1 2 3 5
	t1=t2;
	t2=sum;	
    arr+=' ';
 }
 console.log(arr);
}

refibronacci=(n,i,arr,sum,t1,t2)=>{
    i++;
    if(n==i)
        return console.log(arr);

    sum=t1+t2;
    arr+=' '+sum;
    refibronacci(n,i,arr,sum,t2,sum);
}


//fibonacci(10);
refibronacci(10,0,1,0,0,1);
