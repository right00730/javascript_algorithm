const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");

const [N, X] = input[0].split(" ").map((x) => +x);
const numbers = input[1].split(" ").map((x) => +x);
function solution(N, X, numbers) {
  let answer = "";
  for (let i = 0; i < N; i++) {
    if (numbers[i] < X) answer += numbers[i] + " ";
  }
  return answer;
}

console.log(solution(N, X, numbers));
