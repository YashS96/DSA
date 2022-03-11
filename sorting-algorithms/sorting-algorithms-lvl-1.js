//Comparison Sorts
//O(n^2) 
function bubble(a) //stable
{
    let n=a.length;
    let temp;
    for(let i=0;i<n-1;i++)
        {
            for(let j=i+1;j<n;j++)
            {
                console.log(a[i]+' '+a[j])
                if(a[j]<a[i])
                {
                    temp=a[i];
                    a[i]=a[j];
                    a[j]=temp;
                }
            }
        }
        console.log(a);
}

function selection(a) //unstable
{
    let n=a.length;
    let min,temp;
    for(let i=0;i<n;i++)
    {
        min=i;
        for(let j=i+1;j<n-1;j++)
            {
                if(a[j]<a[min])
                    min=j;
            }
            temp=a[i];
            a[i]=a[min];
            a[min]=temp;
     }   
     console.log(a);
}

function insertion(a) //stable
{
    let n=a.length;
    let temp=0;
    let temp2=0;
    let flag=false;                                                    
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<=i;j++)
        {
            if(flag)
            {
                //Bubbling of elements with Right Shift 
                temp2=a[j];
                a[j]=temp;
                temp=temp2;
            }
            if(a[j]>a[i] && flag==false)
            {
                // Insertion
                temp=a[j];
                a[j]=a[i];

                flag=true;// Setting the domino effect
            }
            if(j==i)
                flag=false;
        }
    
    } 
    console.log(a)  
}
// More intuitive
//create a sorted array as we go by, when encouter an out of order entry, swap it till you get in the correct order 
function insertion_pairWiseSwap(a)
{
    let j=0;let k=0;let l=0;let flag=false;
    for(let i=0;i<a.length;i++){
        j=i+1;

        if(a[j] >= a[i])
            continue;
        else{
           while(flag != true){
                k=j-1;l=j;

                if(a[l] <= a[k]){
                    let temp =a[k];
                    a[k]=a[l];
                    a[l]=temp;
                }
                else flag=true;

                k--;l--;
            }
        }
        j++;
    }
    console.log(a)

}
a=[7,6,2,1,4,3,5,8]
bubble(a)
selection(a)
insertion(a)
insertion_pairWiseSwap(a)