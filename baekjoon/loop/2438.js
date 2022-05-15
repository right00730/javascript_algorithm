const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();
function solution(n) {
  let stars = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      stars += "*";
    }
    stars += "\n";
  }
  return stars;
}

console.log(solution(input));
