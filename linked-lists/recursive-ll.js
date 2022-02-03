// recursive ll-> create, delete and traversal

function node(value){
    this.data=value;
    this.next=null;
} 

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
   
    //createList(4,[1,2,34,5]) // instead of creating, try a recursive insert function 

    // createList(n,a){
    //     if(n<0)
    //         return;
        
    //     let x=new node(a[])    
    //     if(!head)
    //         this.head=x;
    //     else{
    //         let current=this.head;

    //         n--;
    //         this.createList(n,a);
    //         current=current.next;
    //     }
        
    // }
    deleteLast(current){// pass a previous
        if(!current.next.next){
            current.next=null;
            return;
        }
        if(!this.head)
            current=current.next;
        this.deleteLast(current);
    }

    traverse(current){
        if(!current) 
            return;

        console.log(current.data);
        current=current.next;
        this.traverse(current);
    }
}

let ll=new LinkedList();

//ll.createList(4,[1,2,3,4,5,6])
ll.deleteLast(ll.head)
ll.traverse(ll.head)