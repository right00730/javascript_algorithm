// class Node {
//   constructor(value) {
//     this.next = null;
//     this.val = value;
//   }
// }
// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(val) {
//     let newNode = new Node(val);
//     if (this.size === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }
//   dequeue() {
//     if (this.size === 0) return null;
//     if (this.size === 1) {
//       this.last = null;
//     }
//     let temp = this.first;
//     this.first = this.first.next;
//     this.size--;
//     return temp;
//   }
// }

// let queue = new Queue();
// console.log(queue.enqueue(1));
// console.log(queue.enqueue(3));
// console.log(queue.enqueue(5));
// console.log("de", queue.dequeue());
// console.log(queue.enqueue(4));
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
var validateStackSequences = function (pushed, popped) {
  let tempStack = [];
  let n = pushed.length;
  let popIdx = 0;
  let pushIdx = 0;
  tempStack.push(pushed[pushIdx]);
  pushIdx++;
  while (pushIdx !== n) {
    if (
      tempStack.length &&
      tempStack[tempStack.length - 1] === popped[popIdx]
    ) {
      popIdx++;
      tempStack.pop();
    } else {
      tempStack.push(pushed[pushIdx]);
      pushIdx++;
    }
  }

  while (popIdx !== n) {
    if (tempStack[tempStack.length - 1] === popped[popIdx]) {
      tempStack.pop();
    }
    popIdx++;
  }
  console.log(tempStack);
  return tempStack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
