let node=function(value) {
    
    this.data=value;
    this.next=null;
    this.previous=null;
}

class DoublyLinkedList{
    constructor(){
        
        this.head=null;
        this.size=0;
    }
    traverse(){
        let a=[];
        
        for(let current=this.head;current!=null;current=current.next)
            a.push(current.data);

        console.log(a);
    }
    insertLast(value){
        let x=new node(value);
        
        if(this.head==null)
            this.head=x;

        else{
            let current=this.head;
            
            while(current!=null){
                if(current.next==null){
                    current.next=x;
                    x.previous=current;
                    break;
                }
            current=current.next;
        }

        }
        this.size++;
    }
    insertFirst(value){
        let x=new node(value);

        if(this.head==null)
            this.head=x;
        else{
            let current=this.head;
            
            while(current!=null){
                if(current.previous==null){
                    current.previous=x;
                    x.next=current;
                    this.head=x;
                    break;
                }
            current=current.previous;
        }
            
    }
    this.size++;
}
    insertAtindex(value){
        let x=new node(value);
        
    }
    reverse(){
        let current,tail
        current=tail=this.head;
        let a=[];

        while(current){//O(N)
            if(current.next==null){
                tail=current;
            }             
            current=current.next;
        }
           
        while(tail){//O(N) (Traversal)
            a.push(tail.data)
            tail=tail.previous;
        }

        console.log(a);
    }


    deleteFirst=()=>{
        let current=this.head;
        this.head=this.head.next;
        this.head.previous=null;
        current.next=null;
    }

    deleteLast=()=>{
        let current=this.head;
        while(current){
            if(!current.next.next){
                current.next.previous=null;
                current.next=null;
            }
            current=current.next;
        }
    }


    // deleteAtIndex=()=>{

    // }


    // sort=()=>{ //Selection Sort
        
    //     let i=this.head;
    //     let j=i.next;
    //     let min,temp;
    //     while(i){
    //         min=i;
    //         while(j){
    //             if(j.data < min.data) //Data Compariosn in Js (UNICODE VALUES BE WARE!!)
    //                 min=j;
    //             j=j.next;
    //         }
    //         temp=i.data;
    //         i.data=min.data;
    //         min.data=temp;
    //         if(i.next!=null){
    //             i=i.next;
    //             j=i.next;
    //         }
    //     }
    // }

    insertInCorrectOrder(data){
        let x=new node(data);
        
        for(let current=this.head;current!=null;current=current.next){
            if(current.data > x.data){
                x.previous=current.previous;
                x.next=current;
                current.previous.next=x;
                current.previous=x;
                break;
            }

        }
    }

}

let dll=new DoublyLinkedList();

dll.insertLast(1)
dll.insertLast(2)
dll.insertLast(3)
dll.insertLast(4232)
dll.insertLast(14)
dll.insertLast(693)
dll.insertLast(433)
dll.insertFirst(22)
dll.insertFirst(11)
dll.traverse()
dll.reverse()
dll.deleteFirst()
dll.deleteLast()
dll.traverse()
//dll.sort();
//dll.traverse()
//dll.insertInCorrectOrder(22)
