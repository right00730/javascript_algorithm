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
    let newNode = new Node(val);
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
  rotate(val) {
    if (this.length === 0) return null;
    if (val === 0) return this.head;

    if (val > 0) {
      // let temp = this.head;
      // this.head = this.head.next;
      // this.tail.next = temp;
      // this.tail = temp;
      // temp.next = null;

      for (let i = 0; i < val; i++) {
        let head = this.head;
        this.head = this.head.next;
        this.tail.next = head;
        this.tail = head;
        this.tail.next = null;
      }
    } else {
      // let lastNode = this.pop();
      // let temp = this.head;
      // this.head = lastNode;
      // this.head.next = temp;

      for (let i = 0; i > val; i--) {
        const last = this.pop();
        last.next = this.head;
        this.head = last;
      }
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
  pop() {
    if (this.length === 0) return null;
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
}
