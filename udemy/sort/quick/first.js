function quickSort(arr, start, end) {
  if (start < end) {
    let pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  console.log(arr.slice());

  return arr;
}

function pivot(arr, start, end) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
let arr = [2, 44, 1, 3, 5, 22, 10];
console.log(quickSort([2, 44, 1, 3, 5, 22, 10], 0, arr.length - 1));
