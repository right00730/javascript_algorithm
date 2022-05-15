const { chownSync } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input = line;
  rl.close();
});
rl.on("close", function () {
  const [N, K] = input.split(" ").map((x) => +x);
  console.log(solution(N, K));
  process.exit();
});

function solution(N, K) {
  let answer = 0;
  let dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N }, () => 0)
  );

  function combination(n, k) {
    if (dp[n][k]) {
      return dp[n][k];
    }
    if (n === k || k === 0) {
      return (dp[n][k] = 1);
    } else {
      for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n; j++) {}
      }
      dp[n][k] = combination(n - 1, k - 1) + combination(n - 1, k);
      console.log(dp[n][k]);
      return dp[n][k];
    }
  }
  answer = combination(N, K);
  return answer;
}
// function combination(N, K) {
//   let dp = Array.from({ length: N + 1 }, () =>
//     Array.from({ length: N + 1 }, () => 0)
//   );

//   for (let i = 1; i <= N; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (j === i || j === 0) dp[i][j] = 1 % 10007;
//       else {
//         dp[i][j] =
//           ((dp[i - 1][j - 1] % 10007) + (dp[i - 1][j] % 10007)) % 10007;
//       }
//     }
//   }
//   return dp[N][K];
// }
