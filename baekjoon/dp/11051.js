const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const numbers = input[0].split(" ").map((x) => +x);

function combination(k, r, num) {
  const dp = Array.from({ length: k + 1 }, () =>
    Array.from({ length: k + 1 }, () => 0)
  );
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) {
        dp[i][j] = 1 % num;
      } else if (i > 0 && j >= 0) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % num;
      }
    }
  }
  return dp[k][r];
}
console.log(combination(...numbers, 10007));
