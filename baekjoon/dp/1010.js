const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
input.shift();
input.forEach((nums) => {
  const [n, m] = nums.split(" ").map((x) => +x);
  console.log(combination(n, m));
});
function combination(n, m) {
  let dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) dp[i][j] = 1;
      else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[m][n];
}
