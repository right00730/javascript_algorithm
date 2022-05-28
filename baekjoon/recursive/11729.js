const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(Number(input)));
  process.exit();
});
// 자기자신이 가야하는 층을 제외한 곳에 모두 이동시켜놓고
// 자신이 이동후에는 다시 위층들을 자신의층으로 이동시키면된다.
function solution(n) {
  let process = [];
  function hanoi(L, c, t) {
    let target = 6 - c - t;
    if (L <= 0) return;
    hanoi(L - 1, c, target);
    process.push(c + " " + t);
    hanoi(L - 1, target, t);
  }
  hanoi(n, 1, 3);
  return process.length + "\n" + process.join("\n");
}
