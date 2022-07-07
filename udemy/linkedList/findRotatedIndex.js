function findRotatedIndex(arr, k) {
  // add whatever parameters you deem necessary - good luck!

  const min = findMin(arr);
  console.log("min : ", min);
  let res1 = findK(arr.slice(0, min), k, 0);
  let res2 = findK(arr.slice(min), k, min);
  return Math.max(res1, res2);
}

function findMin(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let idx = Math.floor((start + end) / 2);

    if (idx === 0) return 0;
    if (arr[idx] < arr[idx - 1]) return idx;
    else if (arr[idx] < arr[0]) {
      end = idx - 1;
    } else {
      start = idx + 1;
    }
  }
}
function findK(arr, k, min) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let idx = Math.floor((start + end) / 2);

    if (arr[idx] === k) return idx + min;
    else if (arr[idx] < k) {
      start = idx + 1;
    } else {
      end = idx - 1;
    }
  }
  return -1;
}
let res = findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3);

console.log(res);
