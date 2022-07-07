// class Stack {
//   constructor() {}
//   push(val) {}
//   pop() {}
// }

// // QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(data) {
//     var node = new Node(data);

//     if (!this.first) {
//       this.first = node;
//       this.last = node;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }

//     return ++this.size;
//   }

//   dequeue() {
//     if (!this.first) return null;

//     var temp = this.first;
//     if (this.first == this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(node) {
    const newNode = new Node(node.val);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return undefined;
    const head = this.head;
    this.head = head.next;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }
    return head;
  }
}

class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }
  push(val) {
    let newNode = new Node(val);
    if (this.queue1.size === 0) {
      this.queue1.enqueue(newNode);
    } else {
      while (this.queue1.size !== 0) {
        let last = this.queue1.dequeue();
        this.queue2.enqueue(last);
      }
      this.queue1.enqueue(newNode);
      while (this.queue2.size !== 0) {
        this.queue1.enqueue(this.queue2.dequeue());
      }
    }
    return this;
  }
  pop() {
    if (this.queue1.size === 0) return null;
    let dequeue = this.queue1.dequeue();
    console.log(dequeue);
    return dequeue.val;
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

let s = new Stack();
s.push(10).push(20).push(30);
const res = s.pop();
console.log(res);
