function binarySearch(a,ele)
{
    let n=a.length;
    let first=0;let last=n-1;
    let mid;
    for(let i=0;i<n/2;i++)
    {
        mid=Math.floor((first+last)/2);
        //console.log(a[mid]); Division in Js returns decimal value hecne floor function needs to be used to get the greatest integer less than or equal to the quotient 
        if(a[mid]==ele)
            { 
                console.log(`${ele} is a at position ${mid+1}`);
                break;
            }
        else if(a[mid]>ele)
            last=mid-1;
        else if(a[mid]<ele)
            first=mid+1;
        else console.log(`${ele} not found!`)

    }
}
const a=[1,2,3,4,5,6,7,8,9]
console.log(binarySearch(a,9))

//Comparison function
// let compare = (a,b) =>{
//     return a-b;
//    }
   
//    console.log(BinarySearch([1,2,3,4,5,6,7,55,334,345,3333].sort(compare),7))