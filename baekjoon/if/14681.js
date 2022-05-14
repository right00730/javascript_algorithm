const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
});
rl.on("close", function () {
  const x = parseInt(input[0]);
  const y = parseInt(input[1]);
  console.log(solution(x, y));
});

function solution(x, y) {
  if (x > 0) {
    if (y > 0) return 1;
    else return 4;
  } else {
    if (y > 0) return 2;
    else return 3;
  }
}
