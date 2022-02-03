class Stack{
    constructor(stackSize){
        this.a=[]; 
        this.index=0;// a.indexOf(a.length-1)
        this.size=0;// a.length 
        this.max=stackSize;
    }
    push(data){
        if(this.isFull())
            console.log(`Stack is Full!`);
        else{
            this.index++;
            this.a.push(data);
            this.size++;
            this.traverse();
        }
        
    }
    pop(){
        if(this.isEmpty())
            console.log(`Stack is Empty!!`)
        else{
            console.log(this.a.pop());
            this.index--;
            this.size--;
            this.traverse();
        }

    }

    //helper methods
    
    traverse(){
        console.log(this.a);
    }

    isFull(){
        if(this.size==this.max)
            return true;
        else return false;
    }

    isEmpty(){
        if(this.index==0)
            return true;
        else return false;

    }

}

let s=new Stack(5);
for(let i=0;i<5;i++)
    s.push(i+1);
s.push(5)
    for(let i=0;i<5;i++)
    s.pop()
s.pop()



