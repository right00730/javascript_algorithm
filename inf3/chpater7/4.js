function solution(numbers) {
  let arr = [...numbers];
  const len = numbers.length;

  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        continue;
      }
      break;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
