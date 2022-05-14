const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input = line.split(" ").map((x) => +x);
  rl.close();
}).on("close", function () {
  const [a, b, c] = input;
  console.log(solution(a, b, c));
});

function solution(a, b, c) {
  if (a === b && b === c) return 10000 + a * 1000;
  else if (a !== b) {
    if (a !== c && b !== c) return Math.max(a, b, c) * 100;
    else return 1000 + c * 100;
  } else {
    return 1000 + a * 100;
  }
}
//  (a === b) === c는 유효하지않음!
