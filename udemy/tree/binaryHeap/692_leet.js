/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// var topKFrequent = function (words, k) {
//   let lookup = {};
//   let answer = [];
//   for (let word of words) {
//     lookup[word] = (lookup[word] || 0) + 1;
//   }
//   answer = Object.keys(lookup).sort((a, b) => {
//     if (lookup[a] === lookup[b]) {
//       if (a.charCodeAt() === b.charCodeAt()) return b > a ? -1 : 1;
//       else return a.charCodeAt() - b.charCodeAt();
//     } else {
//       return lookup[b] - lookup[a];
//     }
//   });
//   return answer.slice(0, k);
// };

// heap으로 풀어보기 - 형제노드 처리
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
      console.log("before enqueue", this.list);

      this.list.push({ val: val, priority: priority });
      this.bubbleUp();
      console.log("afrer enqueue", this.list);
    }
    dequeue() {
      let max = this.list[0];
      if (this.list.length > 1) {
        this.list[0] = this.list[this.list.length - 1];
      }
      console.log("before dequeue", this.list);
      this.list.pop();
      this.sinkDown();
      console.log("afrer dequeue", this.list);

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
        swap(this.list, idx, parentIdx);
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
            (swapIdx !== null &&
              rightElement.priority === leftElement.priority &&
              rightElement.val < leftElement.val)
          ) {
            swapIdx = rightIdx;
          }
        }

        if (swapIdx === null) break;
        else {
          swap(this.list, idx, swapIdx);
        }
        idx = swapIdx;
      }
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
  for (let i = 0; i < k; i++) {
    answer.push(queue.dequeue().val);
  }
  return answer;
};

function swap(arr, idx, idx2) {
  let temp = arr[idx];
  arr[idx] = arr[idx2];
  arr[idx2] = temp;
}
// let arr = [
//   "the",
//   "day",
//   "is",
//   "sunny",
//   "the",
//   "the",
//   "the",
//   "sunny",
//   "is",
//   "is",
// ];

let arr = ["i", "love", "leetcode", "i", "love", "coding"];
let k = 2;
console.log(topKFrequent(arr, k));
