// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const { listenerCount } = require("process");

// class SinglyLinkedList {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
//   push() {
//     var newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;

//     return this;
//   }
//   remove() {}
// }

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
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }
  remove(idx) {
    console.log(idx > this.length - 1);
    if (idx < 0 || idx > this.length - 1) return undefined;
    let pre = this.get(idx - 1);
    const target = pre.next;
    pre.next = target.next;
    return target;
  }
}

const lis = new SinglyLinkedList();

lis.push(5).push(10).push(15).push(20);
let res = lis.remove(2).val;
res = lis.remove(100);

console.log(res);
