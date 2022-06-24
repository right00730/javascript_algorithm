/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
/*
var topKFrequent = function (words, k) {
  let lookup = {};
  let answer = [];
  for (let word of words) {
    lookup[word] = (lookup[word] || 0) + 1;
  }
  answer = Object.keys(lookup).sort((a, b) => {
    if (lookup[a] === lookup[b]) return  b > a ? -1 : 1;
     else return lookup[b] - lookup[a];

  });
  return answer.slice(0, k);
};
 */

var topKFrequent = function (words, k) {
  class PQ {
    constructor() {
      this.list = [];
    }
    enqueue(val, priority) {
      console.log(val, priority);
      this.list.push({ val: val, priority: priority });
      this.bubbleUp();
    }
    dequeue() {
      let max = this.list[0];
      if (this.list.length > 1) {
        this.list[0] = this.list[this.list.length - 1];
      }
      this.list.pop();
      this.sinkDown();
      return max;
    }
    bubbleUp() {
      let idx = this.list.length - 1;
      let current = this.list[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.list[parentIdx];
        if (current.priority < parent.priority) break;
        else if (current.priority === parent.priority) {
          if (current.val > parent.val) break;
        }
        this.swap(this.list, idx, parentIdx);
        idx = parentIdx;
      }
    }
    sinkDown() {
      let idx = 0;
      while (idx < this.list.length) {
        let element = this.list[idx];
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;
        let leftElement;
        let rightElement;
        let swapIdx = null;

        if (leftIdx < this.list.length) {
          console.log("1");
          leftElement = this.list[leftIdx];
          if (leftElement.priority > element.priority) {
            swapIdx = leftIdx;
          } else if (
            leftElement.priority === element.priority &&
            leftElement.val < element.val
          ) {
            swapIdx = leftIdx;
          }
        }
        if (rightIdx < this.list.length) {
          rightElement = this.list[rightIdx];

          if (
            (swapIdx === null && rightElement.priority > element.priority) ||
            (swapIdx !== null && rightElement.priority > leftElement.priority)
          ) {
            swapIdx = rightIdx;
          } else if (
            (swapIdx === null &&
              rightElement.priority === element.priority &&
              rightElement.val < element.val) ||
            (swapIdx !== null && rightElement.val < leftElement.val)
          ) {
            swapIdx = rightIdx;
          }
        }
        console.log("=======");

        console.log("idx : ", idx, "leftIdx", leftIdx, "rightIdx", rightIdx);
        console.log(
          "idxelem : ",
          element,
          "leftElement",
          leftElement,
          "rightIdx",
          rightElement
        );

        console.log("swap idx", swapIdx);
        console.log("=======");

        console.log(swapIdx);
        if (swapIdx === null) break;
        else {
          this.list[idx] = this.list[swapIdx];
          this.list[swapIdx] = element;
        }
        idx = swapIdx;
      }
    }

    swap(arr, idx1, idx2) {
      let temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
    }
  }
  let lookup = {};
  let queue = new PQ();
  for (let word of words) {
    lookup[word] = (lookup[word] || 0) + 1;
  }

  for (let key of Object.keys(lookup)) {
    queue.enqueue(key, lookup[key]);
  }
  let answer = [];
  console.log(queue);
  for (let i = 0; i < k; i++) {
    answer.push(queue.dequeue().val);
  }
  return answer;
};
let words = ["i", "love", "leetcode", "i", "love", "coding"];
console.log(topKFrequent(words, 2));
