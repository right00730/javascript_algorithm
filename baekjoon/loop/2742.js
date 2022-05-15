const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();
function solution(n) {
  let answer = "";
  for (let i = n; i >= 1; i--) {
    answer += Number(i) + "\n";
  }
  return answer;
}

console.log(solution(input));
