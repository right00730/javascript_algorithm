function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let pt = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    while (sum > m) {
      sum -= arr[pt++];
    }
    answer += i - pt + 1;
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
