class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;

    let currNode = this.head;
    let prevNode = currNode;

    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currNode;
  }

  shift() {
    if (!this.length) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    let currNode = this.head;
    let cnt = 0;
    while (cnt < idx) {
      cnt++;
      currNode = currNode.next;
    }
    return currNode;
  }

  set(idx, val) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === 0) return !!this.unshift(val);
    else if (idx === this.length) return !!this.push(val);
    else {
      const newNode = new Node(val);
      const prevNode = this.get(idx - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prevNode = this.get(idx - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse2() {
    let prev = null;
    let curr = this.head;
    let next = curr.next;

    this.head = this.tail;
    this.tail = curr;

    for (var i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  }
}

const singly = new SinglyLinkedList();
