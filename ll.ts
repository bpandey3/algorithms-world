class LinkedList {
  head: any;
  tail: any;
  length: number;
  constructor(value: number) {
    const node = new LLNode(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
    //node
    //set head and tail
    //set leangth
    //console.log(this);
  }

  push(value) {
    const newNode = new LLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(value) {
    let pre = this.head;
    let temp = this.head;
    if (!this.head) return undefined;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
  }

  unshift(value) {
    const newNode = new LLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }

    return temp;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new LLNode(value);

    let temp = this.getIndex(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  getIndex(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.getIndex(index);
    if (!temp) return false;
    temp.value = value;
    return true;
  }

  reverse() {
    let temp = this.head;
    let previous;
    let next;
    this.head = this.tail;
    this.tail = temp;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = previous;
      previous = temp;
      temp = next;
    }
  }
}

class LLNode {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Main {
  ll: LinkedList;
  constructor() {
    this.ll = new LinkedList(23); //0
    //console.log(this.ll);
  }

  public executeCode() {
    this.ll.push(43); //1
    this.ll.push(51); //2
    this.ll.push(60); //3
    this.ll.push(91); //4

    // console.log('head', this.ll.head);
    // console.log('tail', this.ll.tail);

    // this.ll.pop(60);
    // console.log('pop tail', this.ll.tail);

    // this.ll.unshift(21);
    // console.log(' head', this.ll.head);
    // console.log('next head', this.ll.head.next);

    // this.ll.shift();
    // this.ll.shift();
    // this.ll.shift();
    // console.log(' head', this.ll.head);
    // console.log('next head', this.ll.head.next);

    // //Set index
    // console.log('get index before set', this.ll.getIndex(2));
    // const index = this.ll.set(2, 44);
    // console.log('get index', this.ll.getIndex(2));
    // console.log('next head', this.ll.head.next);

    //Set index
    //console.log('get index before set', this.ll.insert(2, 100));

    //console.log('sfter reverse', this.ll.reverse());
   // console.log('get index', this.ll.getIndex(2));
   // console.log('next head', this.ll.head.next);
  }
}

const ll = new Main();
ll.executeCode();