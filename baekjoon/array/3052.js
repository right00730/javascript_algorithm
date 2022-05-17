const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

function solution(numbers) {
  const FLAG_NUM = 42;
  const n = 10;
  const chNum = {};
  for (let i = 0; i < n; i++) {
    const value = Number(numbers[i]) % FLAG_NUM;
    if (!chNum[value]) chNum[value] = 1;
  }
  return Object.keys(chNum).length;
}
console.log(solution(input));
