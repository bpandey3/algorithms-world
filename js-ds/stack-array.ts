


export default class StackwithArray{
    top: any;
    bottom: any;
    length:number;
    array:any[];

    constructor(){
        this.array =[];
    }

    push(value){
        this.array.push(value)
        return this;

    }

    pop(){
       this.array.pop()
       return this


    }

    peek(){
        return this.array[this.array.length-1];
    }
    
}

const newStack = new Stack();
newStack.push('banana');
newStack.push('apple');
console.log(newStack.push('oranges'));

console.log(" \n \n  ----------------------------- \n \n");
console.log(newStack.peek())

// console.log(newStack.pop())

// console.log(newStack.peek())