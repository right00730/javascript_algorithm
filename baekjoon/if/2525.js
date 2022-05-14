const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let time = 0;
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  time = +input.pop();
  const [H, M] = input[0].split(" ").map((x) => +x);
  console.log(solution(H, M, time));
  process.exit();
});

function solution(H, M, take) {
  M += take;
  if (M > 59) {
    H += Math.floor(M / 60);
    M = M % 60;
    if (H > 23) H %= 24;
  }
  return H + " " + M;
}
// 해당문제는 time의 제한이 1000이여서 괜찮으나 60000 같이
// 60으로 나누어도 24를 넘는 큰숫자가 오는경우 H에 더해주는 몫이
// 매우 클 수 있다. H를 제대로 처리하기위해서는 24를빼는것이 아니라 24로 나눈 나머지만 필요
