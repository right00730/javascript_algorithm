const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();
function solution(n) {
  let stars = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      if (j <= i) stars += "*";
      else stars += " ";
    }
    stars += "\n";
  }
  return stars;
}

console.log(solution(input));
