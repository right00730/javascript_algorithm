// easy
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";
rl.on("line", (line) => {
  input = line.trim();
  rl.close();
}).on("close", () => {
  console.log(solution(+input));
  process.exit();
});

function solution(n) {
  if (n === 1) return 1;
  let scope = 1;
  let count = 1;
  while (scope < 1000000000) {
    scope += 6 * count;
    count++;

    if (scope >= n) return count;
  }
  return -1;
}
