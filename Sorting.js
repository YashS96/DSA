//O(n^2)
function bubble(a)
{
    let n=a.length;
    let temp;
    for(let i=0;i<n-1;i++)
        for(let j=i+1;i<n;j++)
            if(a[j]<a[i])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }

    return a;
}

function Selection(a)
{
    let n=a.length;
    let min,temp;
    for(let i=0;i<n;i++)
    {
        for(let j=i+1;j<n-1;j++)
            {
                if(a[j]<a[i])
                    min=j;
            }
            temp=a[i];
            a[i]=a[min];
            a[min]=temp;
     }
    
     return a;
}

function Insertion(a)
{
    
}