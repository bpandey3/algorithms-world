class BSTNode {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: any;
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BSTNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    //console.log('temp ', temp);
    while (temp) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        //console.log('newNode.value < temp.value ');
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let temp = this.root;
    //console.log(temp);
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

export default class Main {
  public executeCode() {
    const treeNode = new BST();
    treeNode.insert(21);
    treeNode.insert(86);
    treeNode.insert(19);
    console.log('tree node ', treeNode.insert(2));
    //console.log('tree node contains ', treeNode.minValue());

    console.log(
      'minValueNode from root:',
      treeNode.minValueNode(treeNode.root).value
    );
  }
}
