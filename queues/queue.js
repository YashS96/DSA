class Queue{
    constructor(queueSize){
        this.queue=[];
        this.max=queueSize;
        // this.head=0;
        // this.tail=0;
        // this.size=0;
    }
    enqeue(data){
        if(this.isFull())
            console.log(`Queue is full!!`);
        else{
            this.queue.push(data);
        }
        this.traverse();
    }
    dequeue(){ 
        if(this.isEmpty())
            console.log(`Queue is Empty!!`);
            else{
                console.log(this.queue[0]);
                let j=1;
                for(let i=0;i<this.queue.length;i++){
                    
                    if(this.queue.length==1){
                        this.queue.pop()
                        break;
                    }

                    this.queue[i]=this.queue[j];
                    
                    if(j==this.queue.length-1){
                        this.queue.pop();
                        break;
                    }
                    j++;
                }
            }
            this.traverse();
    }
    isFull(){
        if(this.queue.length==this.max)
            return true;
        else return false;
    }
    isEmpty(){
        if(this.queue.length==0)
            return true;
        else return false;

    }
    traverse(){
        console.log(this.queue);
    }

}

let q = new Queue(5);

for(let i=0;i<5;i++)
    q.enqeue(i);

q.enqeue(6);
for(let i=0;i<5;i++)
    q.dequeue();
q.dequeue();



