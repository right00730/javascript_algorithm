let fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

function solution(input) {
  const n = input.shift();
  let answer = "";
  for (let i = 0; i < n; i++) {
    const [A, B] = input[i].split(" ");
    answer += parseInt(A) + parseInt(B);
    if (i !== n - 1) answer += "\n";
  }
  return answer;
}
console.log(solution(input));
