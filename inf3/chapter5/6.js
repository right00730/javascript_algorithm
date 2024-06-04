function solution(k, sales) {
  let answer = 0;
  let total = 0;

  for (let i = 0; i < k; i++) {
    total += sales[i];
  }
  answer = total;

  for (let i = k; i < sales.length; i++) {
    total = total + sales[i] - sales[i - k];
    answer = Math.max(answer, total);
  }

  return answer;
}
const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));
