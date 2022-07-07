let dp = Array.from({ length: 6 }, () => undefined);

function fib(n, dp = []) {
  if (dp[n]) return dp[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, dp) + fib(n - 2, dp);
  dp[n] = res;
  return res;
}
function fib_ta(n) {
  if (n <= 2) return 1;
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fib_ta(10000));
