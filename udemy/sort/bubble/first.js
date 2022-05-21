function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) arr = swap(arr, j, j + 1);
    }
  }
  return arr;
}
// optmized version
function bubbleSort_v2(arr) {
  let n = arr.length;
  let swapFlag = false;
  for (let i = 0; i < n - 1; i++) {
    swapFlag = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapFlag = true;
        arr = swap(arr, j, j + 1);
      }
    }
    if (!swapFlag) break;
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}
console.log(bubbleSort([5, 3, 4, 1, 2]));
