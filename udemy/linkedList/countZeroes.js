function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!!!
  //   find
  if (arr.length === 0) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let idx = Math.floor((start + end) / 2);
    if (arr[idx] === 0) {
      end = idx;
    } else {
      start = idx + 1;
    }
  }
  return arr.length - start;
}

let res = countZeroes([1, 1, 1, 1, 0]);
console.log(res);
