function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!
  //select pivot
  //ended index of pivot

  if (typeof comparator !== "function") comparator = (a, b) => a - b;
  //   let arr = arr.slice();
  let pivot = arr[0];

  while (start <= end) {
    console.log(start, end);
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
  console.log(arr.slice(), end);

  swap(arr, 0, end);
  console.log(arr);
  return end;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function tt(a, b) {
  return a.length - b.length;
}
let arr = ["LilBub", "Garfield", "Heathcliff", "BLue", "Grumpy"];
let res = pivot(arr, tt);
console.log(res);

res = arr.slice(0, 1).sort(tt);
console.log(res);
res = arr.slice(1).sort(tt);
console.log(res);
