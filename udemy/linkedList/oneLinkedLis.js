const { listenerCount } = require("process");
const { runInThisContext } = require("vm");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = 0;
    this.tail = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let pre = this.head;
    let current = pre;
    while (current.next) {
      pre = current;
      current = current.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
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
    if (idx < 0 || idx >= this.length) return null;
    else {
      let counter = 0;
      let current = this.head;
      while (counter < idx) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }
  set(idx, val) {
    let target = this.get(idx);
    if (!target) return false;
    else {
      target.val = val;
      return true;
    }
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    else {
      let newNode = new Node(val);
      let preNode = this.get(idx - 1);
      let targetNode = preNode.next;
      preNode.next = newNode;
      newNode.next = targetNode;
      this.length++;
      return true;
    }
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    else {
      let preNode = this.get(idx - 1);
      let removeNode = preNode.next;
      preNode.next = removeNode.next;
      this.length--;
      return removeNode;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
  print() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

let list = new LinkedList();
list.push(1);
list.push(1);

list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(5);

// list.reverse();
list.print();

const tdeleteDuplicates = function (head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  console.log("head", head);
  return head;
};

const res = tdeleteDuplicates(list.head);
