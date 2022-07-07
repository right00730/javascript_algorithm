class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.last) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }
    this.first = newNode;
    this.size++;

    return this.size;
  }
  pop() {
    if (this.size === 0) return undefined;
    let last = this.first;
    this.first = last.next;
    this.size--;
    return last;
  }
}

console.log();
