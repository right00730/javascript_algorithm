class Node {
  constructor(value) {
    this.next = null;
    this.val = value;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let node = this.top;
      this.top = newNode;
      newNode.next = node;
    }
    console.log("------------");

    console.log("top >>>>>", this.top);
    console.log("------------");

    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    else {
      let popNode = this.top;
      if (this.size === 1) {
        this.bottom = null;
      }

      this.top = this.top.next;

      this.size--;
      return popNode;
    }
  }
}
let stack = new Stack();
console.log(stack.push(1));
console.log(stack);

console.log(stack.push(2));
console.log(stack.push(99));
console.log(stack.pop().val);
console.log(stack.pop().val);
console.log(stack.pop().val);
console.log(stack.top);
console.log(stack.bottom);
