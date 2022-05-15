const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", () => {
  solution(input);
  process.exit();
});

function solution(input) {
  input.shift();
  input = input.map((nums) => {
    return nums.split(" ").map((x) => +x);
  });
  for ([A, B] of input) {
    console.log(A + B);
  }
}
