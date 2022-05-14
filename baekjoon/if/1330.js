const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const nums = input[0].split(" ").map((x) => +x);

function solution(A, B) {
  if (A > B) return ">";
  else if (A < B) return "<";
  if (A === B) return "==";
}
console.log(solution(nums[0], nums[1]));
