const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const numbers = input[0].split(" ").map((x) => +x);

function combination(n, r) {
  return getFactorial(n) / getFactorial(n - r) / getFactorial(r);
}
function getFactorial(k) {
  if (k <= 1) return 1;
  let tmp = k;
  for (let i = k - 1; i >= 1; i--) {
    tmp *= i;
  }
  return tmp;
}

console.log(combination(...numbers));
