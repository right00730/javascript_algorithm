let fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
// "dev/stdin"
function solution(input) {
  const n = input.shift();
  let answer = "";
  for (let i = 0; i < n; i++) {
    const [A, B] = input[i].split(" ");
    answer += parseInt(A) + parseInt(B);
    if (i !== n) answer += "\n";
  }
  return answer;
}
console.log(solution(input));
