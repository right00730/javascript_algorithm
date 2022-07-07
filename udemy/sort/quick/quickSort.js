function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!
  if (typeof comparator !== "function") comparator = (a, b) => a - b;

  let pivot = arr[0];
  while (start <= end) {
    console.log(start, end, pivot, arr[start], arr[end]);

    console.log(comparator(pivot, arr[start]), comparator);

    if (comparator(pivot, arr[start]) >= 0) {
      start++;
      continue;
    }
    if (comparator(pivot, arr[end]) <= 0) {
      end--;
      continue;
    }

    swap(arr, start, end);
  }
  swap(arr, 0, end);
  return end;
}

function quickSort(arr, comparator) {
  // good luck!
  if (arr.length <= 1) return arr;
  let idx = pivot(arr, comparator);
  let A = quickSort(arr.slice(0, idx), comparator);
  let B = quickSort(arr.slice(idx + 1), comparator);
  console.log(A, B);
  return A.concat(arr[idx], B);
}

function tt(a, b) {
  return a.length - b.length;
}

// let arr = ["LilBub", "Garfield", "Heathcliff", "BLue", "Grumpy"];
let arr = [4, 20, 12, 10, 7, 9];
let res = quickSort(arr);
console.log(res);
