function solution(numbers) {
  let arr = [...numbers];
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
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

let arr = [7, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
