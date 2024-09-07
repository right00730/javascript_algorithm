function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function pivotHelper(arr, start, end) {
  let pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }
  swap(arr, pivotIdx, start);
  return pivotIdx;
}

function findKthLargest(arr, k) {
  k = arr.length - k + 1;
  console.log(" k : ", k);

  function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
      const pivotIdx = pivotHelper(arr, start, end);
      if (pivotIdx === k - 1) return arr;
      quickSort(arr, start, pivotIdx - 1);
      quickSort(arr, pivotIdx + 1, end);
    }

    return arr;
  }

  const sorted = quickSort(arr);
  console.log(sorted, k);

  return sorted[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
