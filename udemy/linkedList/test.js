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
    if (val > 0) {
      for (let i = 0; i < val; i++) {
        let temp = this.head;
        this.head = this.head.next;
        this.tail.next = temp;
        this.tail = temp;
        temp.next = null;
      }
    } else {
      let lastNode = this.pop();
      console.log("ch,", lastNode);
      console.log("tail", this.tail);

      let temp = this.head;
      this.head = lastNode;
      this.head.next = temp;
      console.log("ch,", this.tail);
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

// const singlyLinkedList = new SinglyLinkedList();

// singlyLinkedList.push(1);
// singlyLinkedList.push(2);
// singlyLinkedList.push(3);
// singlyLinkedList.push(4);
// singlyLinkedList.push(5);
// singlyLinkedList.push(6);
// singlyLinkedList.push(7);
// singlyLinkedList.push(8);
// singlyLinkedList.push(9);
// singlyLinkedList.push(10);
// singlyLinkedList.push(11);

// singlyLinkedList.print();
// function patition(head) {
//   let fast = head;
//   let slow = head;
//   while (fast !== null && fast.next !== null && fast.next.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   let left = head;
//   let right = slow.next;

//   slow.next = null;
//   console.log("fast", left);
//   console.log("slow", right);
// }
// patition(singlyLinkedList.head);

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(3);

singlyLinkedList.push(3);
singlyLinkedList.push(3);
singlyLinkedList.push(3);
singlyLinkedList.push(4);

singlyLinkedList.push(3);

singlyLinkedList.push(3);
singlyLinkedList.push(3);

singlyLinkedList.push(3);
singlyLinkedList.push(3);

singlyLinkedList.push(2);

singlyLinkedList.push(1);

var isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    console.log("current fast...", fast);
  }
  let left = head;
  let right = slow.next;

  slow.next = null;

  print(left);
  print(right);
  right = reverse(right);

  while (left && right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};

function reverse(node) {
  let current = node;
  let prev = null;
  let next = null;
  while (current.next !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  current.next = prev;
  console.log(next);
  return current;
}

console.log(isPalindrome(singlyLinkedList.head));
function print(node) {
  let arr = [];
  let curr = node;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  console.log(arr);
}
