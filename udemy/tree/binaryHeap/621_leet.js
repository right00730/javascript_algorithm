/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

class PQ {
  constructor() {
    this.size = 0;
    this.list = [];
  }
  insert(val, freq) {
    this.list.push({ val: val, pr: freq });
    this.size++;
    this.bubbleUp();
  }
  dequeue() {
    let out = this.list[0];
    if (this.list[0].pr === 0) {
      this.list[0] = this.list[this.size - 1];
      this.list.pop();
    }
    this.size--;
    this.bubbleDown();
  }
  bubbleUp() {
    let idx = this.size - 1;
    let current = this.list[idx];

    while (idx > 0) {
      let parentId = Math.floor((idx - 1) / 2);
      let parent = this.list[parentId];
      if (parent.pr < current.pr) {
        swap(this.list, parentId, idx);
      }
      idx = parentId;
    }
  }

  bubbleDown() {
    let current = this.list[0];
    let idx = 0;
    while (idx < this.size) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let left;
      let right;
      let swapIdx = null;
      if (leftIdx < this.size) {
        left = this.list[leftIdx];
        if (left.pr > current.pr) swapIdx = leftIdx;
      }
      if (rightIdx < this.size) {
        right = this.list[rightIdx];
        console.log(rightIdx);
        if (swapIdx === null && right.pr > current.pr) swapIdx = rightIdx;
        else if (swapIdx !== null && right.pr > left.pr) swapIdx = rightIdx;
      }
      if (swapIdx === null) break;
      swap(this.list, swapIdx, idx);
      idx = swapIdx;
    }
  }
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx1];
  arr[idx2] = temp;
}

var leastInterval = function (tasks, n) {
  //최대큐를 사용한다
  //값을 최대큐에 우선순위 : 빈도, 값을 저장
  // n번 루프를 돌면서 하나 꺼낼때마다 버블다운
  // 큐의 길이보다 많으면 ideal강제 삽입
  let queue = new PQ();
  let lookup = {};
  for (let task of tasks) {
    lookup[task] = (lookup[task] || 0) + 1;
  }
  for (let key in lookup) {
    queue.insert(key, Number(lookup[key]));
  }
  let answer = [];
  let count = 0;
  while (queue.size > 0) {
    console.log(queue);
    let size = queue.size;
    let min = (n + 1, size);
    for (let i = 0; i < min; i++) {
      let newI = queue.list[i];

      newI.pr--;
      queue.bubbleDown();

      count++;
      answer.push(newI.val);
    }
    console.log("current queue", queue);
    for (let i = 0; i < n + 1 - size; i++) {
      count++;
      answer.push("ideal");
    }
  }
  console.log(count);
  return answer.length;
};
let arr = ["A", "A", "A", "B", "B", "B"];
let n = 2;

console.log(leastInterval(arr, n));
