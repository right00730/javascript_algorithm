class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return null;
    let deleteNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      deleteNode.prev = null;
    }
    this.length--;
    return deleteNode;
  }

  shift() {
    if (this.length === 0) return null;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    else {
      let node = null;
      let flag = this.length / 2 > idx;
      if (flag) {
        console.log("GET FROM START");

        node = this.head;
        let count = 0;
        while (idx !== count) {
          node = node.next;
          count++;
        }
      } else {
        console.log("GET FROM END");
        node = this.tail;
        let count = this.length - 1;
        while (idx !== count) {
          node = node.prev;
          count--;
        }
      }
      return node;
    }
  }
  set(idx, val) {
    if (idx < 0 || idx >= this.length) return null;
    let targetNode = this.get(idx);
    targetNode.val = val;
    return targetNode;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return null;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    else {
      let newNode = new Node(val);
      let pre = this.get(idx - 1);
      let next = pre.next;
      pre.next = newNode;
      newNode.prev = pre;
      next.prev = newNode;
      newNode.next = next;
      this.length++;
    }
    return this;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();
    else {
      let removeNode = this.get(idx);
      let prev = removeNode.prev;
      let next = removeNode.next;
      prev.next = next;
      next.prev = prev;
      removeNode.next = null;
      removeNode.prev = null;
      this.length--;
      return removeNode;
    }
  }

  print() {
    if (this.length === 0) return null;
    let arr = [];
    let node = this.head;

    while (node) {
      arr.push(node.val);
      console.log(node);
      node = node.next;
    }
    console.log(arr);
  }
}
