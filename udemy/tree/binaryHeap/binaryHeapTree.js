class Heap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let newNodeIdx = this.heap.length - 1;
    while (newNodeIdx > 0) {
      let parentIdx = Math.floor((newNodeIdx - 1) / 2);

      if (this.heap[newNodeIdx] <= this.heap[parentIdx]) break;
      else {
        let temp = this.heap[newNodeIdx];
        this.heap[newNodeIdx] = this.heap[parentIdx];
        this.heap[parentIdx] = temp;

        newNodeIdx = parentIdx;
      }
    }
  }
  extractMax() {
    if (this.heap.length === 0) return;
    const max = this.heap[0];
    this.swap(0, this.heap.length - 1);

    this.heap.pop();
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let idx = 0;
    let length = this.heap.length;
    while (idx < this.heap.length) {
      let element = this.heap[idx];
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let leftElement;
      let rightElement;
      let swapIdx = null;

      if (leftIdx < length) {
        leftElement = this.heap[leftIdx];
        if (leftElement > element) swapIdx = leftIdx;
      }
      if (rightIdx < length) {
        rightElement = this.heap[rightIdx];
        if (
          (rightElement > element && swapIdx === null) ||
          (swapIdx !== null && rightElement > leftElement)
        )
          swapIdx = rightIdx;
      }
      if (swapIdx === null) break;
      else this.swap(swapIdx, idx);
      idx = swapIdx;
    }
  }
  swap(idx1, idx2) {
    let temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}
let heap = new Heap();
heap.insert(18);
heap.insert(27);
heap.insert(33);
heap.insert(44);
heap.insert(11);
heap.insert(34);
heap.insert(32);
heap.insert(3);

heap.insert(100);
heap.insert(1);

console.log(heap);

console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
heap.insert(99);

heap.insert(100);
console.log(heap);

/**
 * 최대 이진트리에서 루트요소가 가장 큰 값이다.
 * 만약 최대 요소를 제거하려면 root를 제거하면 된다.
 * 만약 root요소를 제거하고 새로운 요소를 넣는다면 무엇을 넣어야할까. 가장 일반적인 방법은 제일 뒤에 있는 요소와 루트요소를 바꾸는것이다.
 * 그리고 제일 뒤로간 전 루트요소는 제거하고, 새로운 루트요소는 제자리를 찾아간다
 * 루트요소를 제거하고 새롭게 추가된 루트요소가 제자리를 찾아 내려가는 이러한 과정을 다운 팀 , 버블다운, 싱크다운등등으로 부른다
 * 
 * 
 * 의사코드
* 1 .루트요소와 마지막 요소의 자리를 바꾼다. 
2. 새로운 루트요속가 자리를 찾아가도록 한다 - 싱크다운
    - 2-1. 부모요소(처음에는 루트요소)의 두개의 자식요소를 비교한다
    - 2-2. 그중 큰값이 부모요소보다 크다면 자리를 바꾼다
    - 2.3 자리를 바꾼 요소 즉 아래로 내려간 요소에 대해 다시 2-1부터 반복한다. 
    - 2-4 자식요소가 없다면 순회를 종료한다 
 */
