function BinarySearch(a,ele){

    let size= a.length;
    let first=0;let last=size-1;
    for(let i=0;i<size;i++){// while last > first

        middle=(first+last)/2;
        
        if(a[middle] == ele)
            return middle + 1 ;
        else if(ele > a[middle])
            first = middle + 1;

        else if(ele < a[middle])
            last = middle - 1;

        else return `${ele} not found!`;
        
    }

}

let compare = (a,b) =>{
 return a-b;
}

console.log(BinarySearch([1,2,3,4,5,6,7,55,334,345,3333].sort(compare),7))