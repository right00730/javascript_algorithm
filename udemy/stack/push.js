class Node {
  constructor(val) {
    this.value = val;
  }
}
class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
    this.list = [];
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    }
    this.last = newNode;
    console.log(this.list);
    this.list.push(newNode);

    return ++this.size;
  }
}
let stack = new Stack();
stack.push(10);
let rs = stack.first.value;
rs = stack.last.value;
stack.push(100);
rs = stack.first.value;
console.log(rs);
