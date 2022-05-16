const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");

function solution(arr) {
  let answer = "";

  arr = arr.map((nums) => {
    return nums.split(" ").map((x) => +x);
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] + arr[i][1] > 0) answer += arr[i][0] + arr[i][1] + "\n";
  }
  return answer;
}

console.log(solution(input));
