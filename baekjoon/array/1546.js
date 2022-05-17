const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const n = Number(input[0]);
const scores = input[1].split(" ").map((x) => +x);

function solution(n, scores) {
  // 최대값을구한다.
  let answer = 0;
  let max = Math.max.apply(null, scores);
  //각 점수들을 최댓값으로 나눈 후  100을 곱한 값은 저장한다
  for (let score of scores) {
    const calc = (score / max) * 100;
    answer += calc;
  }
  // 저장한 값을 n으로 나눈다
  answer = answer / n;
  return answer;
}

console.log(solution(n, scores));
