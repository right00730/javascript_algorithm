let fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
// "dev/stdin"
function solution(input) {
  const n = input.shift();
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += parseInt(i) + "\n";
  }
  return answer;
}
console.log(solution(input));
