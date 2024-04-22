function solution2(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers;
}

function solution(numbers) {
  const len = numbers.length;
  let arr = [...numbers];
  for (let i = 0; i < len; i++) {
    let idx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    let temp = arr[idx];
    arr[idx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
