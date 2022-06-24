class Node {
  constructor(val, prio) {
    this.priority = prio;
    this.val = val;
  }
}

class PriorQueue {
  constructor() {
    // this.root = null;
    this.list = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.list.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    let min = this.list[0];
    let temp = this.list[this.list.length - 1];
    this.list[0] = temp;
    this.list.pop();

    this.sinkDown();
    return min;
  }

  bubbleUp() {
    let node = this.list[this.list.length - 1];
    let idx = this.list.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentNode = this.list[parentIdx];
      if (parentNode.priority <= node.priority) break;
      else {
        this.list[parentIdx] = node;
        this.list[idx] = parentNode;

        idx = parentIdx;
      }
    }
  }
  sinkDown() {
    let idx = 0;
    while (idx < this.list.length) {
      let element = this.list[idx];

      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 1;
      let leftElement;
      let rightElement;
      let swapIdx = null;
      if (leftIdx < this.list.length) {
        leftElement = this.list[leftIdx];
        if (leftElement.priority < element.priority) {
          swapIdx = leftIdx;
        }
      }
      if (rightIdx < this.list.length) {
        rightElement = this.list[rightIdx];
        if (
          (swapIdx === null && rightElement.priority < element.priority) ||
          (swapIdx !== null && rightElement.priority < leftElement.priority)
        ) {
          swapIdx = rightIdx;
        }
      }
      if (swapIdx === null) break;
      else {
        this.list[idx] = this.list[swapIdx];
        this.list[swapIdx] = element;
      }
      idx = swapIdx;
    }
  }
}

const queue = new PriorQueue();
queue.enqueue("common cold", 5);
queue.enqueue("gun shot", 1);
queue.enqueue("high fever", 4);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
