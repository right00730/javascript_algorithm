// easy
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";
rl.on("line", (line) => {
  input = line;

  rl.close();
}).on("close", () => {
  const [A, B, C] = input.split(" ");
  console.log(solution(+A, +B, +C));
  process.exit();
});

function solution(A, B, C) {
  if (B >= C) return -1;

  //   let profit = A % (C - B) === 0 ? A / (C - B) + 1 : Math.ceil(A / (C - B));
  let profit = Math.floor(A / (C - B)) + 1;
  return profit;
}
