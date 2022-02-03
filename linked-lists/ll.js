"use strict";

function node(value){
    this.data=value;
    this.next=null;
}
 
class LinkedList{
    constructor(){
        this.head=null;//this->ll
        this.size=0;
    }

    traverse=()=>{
        let current=this.head;
        let a=[];
        while(current!=null){
            //console.log(current.data)
            a.push(current.data);
            current=current.next;
        }
        console.log(a);
    }

    insertLast=(data)=> {
    let x =new node(data);
    //x.next=null; // redundant
    if(this.head==null)
        this.head=x;
    else{
        let current=this.head;
        while(current.next!=null){  
            current=current.next;
        }
        current.next=x;
        }
        this.size++;
    }

    insertFirst=(data)=>{
        let x=new node(data);
        x.next=this.head;
        this.head=x;
        this.size++;
    }

    // insertAtIndex=(data,index)=>{
    //     if(index > this.size || index < 0){
    //         console.log('index out of bounds');
    //         return;
    //     }

    //     if(this.head!=null){
    //         let count=0;
    //         let current=this.head;
    //         let previous=current;
    //         while(current!=null){
    //             if(index==count){
    //                 let x=new node(data);
    //                 x.next=current;
    //                 previous.next=x;
    //                 break;
    //             }
    //             count++;    
    //             previous=current;
    //             current=current.next;
    //         }
    //     }
    //     else if(this.head=null && index==0){
    //         let x=new node(data);
    //         x.next=null;
    //         this.head=x;
    //     }
    //     else console.log('No idea boyo!!');
    
    //     this.size++;
    // }

    reverse=()=>{
        let previous=this.head;
        let current=previous.next;
        let link=current.next;
        while(current!=null){ //Can instead use size of list to iterate...
            if(previous==this.head)
                previous.next=null;
            current.next=previous;
            previous=current;
            current=link;
            if(link!=null){
                link=link.next;
                this.head=current;
            }

        }
        
    }

    deleteFirst=()=>{
        let current=this.head;
        this.head=this.head.next;
        current.next=null;
    }

    deleteLast=()=>{
        let current=this.head;
        while(current){
            if(!current.next.next){
                current.next=null;
            }
            current=current.next;
        }
    }

    // deleteAtIndex=()=>{

    // }

    // 2->3->32->122->324->6
    // deleteAlternateOdd=()=>{
    //     let current=this.head;
    //     let remove=current;
    //     while(current && remove){
    //         remove=remove.next;
    //         current.next=current.next.next;
    //         remove.next=null;
    //         remove=current;
    //         //current=current.next;
    //     }
    // }

    // sort=()=>{ // Insertion sort

    // }

}

// for(let i=0;i<5;i++)
//     ll.insertLast(i)

let ll=new LinkedList();
ll.insertLast(13);
ll.insertLast(5);
ll.insertLast(6);
ll.insertFirst(2);
ll.insertFirst(123)
//ll.insertAtIndex(1,0);
// ll.insertAtIndex(22,2);
console.log(`count: ${ll.size}`)
ll.traverse();
ll.reverse();
ll.traverse();
ll.deleteLast();
ll.traverse();
ll.deleteAlternateOdd();