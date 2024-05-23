class SNode{
    value: any;
    next: any;
    constructor(value){
      this.value = value;
      this.next = null;
    }
}


class Stack{
    top: any;
    bottom: any;
    length:number;

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length =0;
    }

    push(value){
        const snode = new SNode(value);
        if(this.length ==0){
            this.top = snode;
            this.bottom = snode;
        }
        else{
            const holdingPoint = this.top;
            this.top = snode;
            this.top.next=holdingPoint;
        }

        this.length++;
        return this;

    }

    pop(){
        if(!this.top){
            return null;
        }

        if(this.top === this.bottom){
            this.bottom = null;
        }

        const holdPointer = this.top;
        this.top = this.top.next;
        this.length ++;
        return holdPointer;


    }

    peek(){
        return this.top;
    }
    
}

const newStack = new Stack();
newStack.push('banana');
newStack.push('apple');
console.log(newStack.push('oranges'));

console.log(" \n \n  ----------------------------- \n \n");
console.log(newStack.peek())

console.log(newStack.pop())

console.log(newStack.peek())