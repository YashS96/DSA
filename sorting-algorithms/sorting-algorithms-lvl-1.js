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

// function insertion_pairWiseSwap(a)
// {

// }

bubble(a)
selection(a)
insertion(a)