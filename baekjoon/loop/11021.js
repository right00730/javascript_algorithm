let fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");

function solution(n, nums) {
  nums = nums.map((items) => items.split(" "));
  let answer = "";
  for (let i = 0; i < n; i++) {
    const [A, B] = nums[i];
    answer += "Case #" + (i + 1) + ": " + (Number(A) + Number(B));
    answer += "\n";
  }
  return answer;
}

console.log(solution(input.shift(), input));
