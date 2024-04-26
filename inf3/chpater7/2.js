function solution(numbers) {
  let arr = [...numbers];
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arrReverse(arr, j, j + 1);
      }
    }
  }
  return arr;
}
function arrReverse(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
