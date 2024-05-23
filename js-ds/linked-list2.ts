//10 -->5-->16-->null
// head  node  tail -->null

class LLNode{
    value: any;
    next: null;
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

class LinkedList{
//  myLinkedList ={

//     head:{
//         value: 10
//         next:{ value: 5, next :{ value:5, next :{}} }

//     }
// }

private head;
private tail;
private length: number;
constructor(value){
    this.head = {
        value:value,
        next: null
    }
    this.tail = this.head;
    this.length = 1;
}

append(value){

    const newNode = new LLNode(value);
    if (this.length)
        {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++

        }

        return this;
}

prepend(value)
{
    const newNode = new LLNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
}

printList(){
    const arr1 =[];
    let currentNode = this.head;
    while(currentNode !==null){
        arr1.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return arr1;
}

traverseList(index){
    let currentNode = this.head;
    let counter =0;
    while(counter !=index){
        //arr1.push(currentNode.value);
        currentNode = currentNode.next;
        counter++;
    }

    return currentNode;
}

insert(index:number, value:any){
    const newNode = new LLNode(value);

    if(index >= this.length){
        return this.append(value)
    }

    const leader = this.traverseList(index-1);
    const holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;

    return this.printList();

}

    
}

const myLL = new LinkedList(10);
myLL.append(5);
myLL.append(16);
myLL.prepend(1);
myLL.prepend(1);

console.log(myLL.printList());

//[ 1, 1, 10, 5, 16 ]

myLL.insert(3,15);

console.log(myLL.printList());