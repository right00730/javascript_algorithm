// input : 반복횟수, 글자
//ouput 반복한 글자들
const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
const casesCount = +input[0];
function solution(cases) {
  let answer = "";
  for (let c = 1; c <= casesCount; c++) {
    let count = cases[c].split(" ")[0];
    const str = cases[c].split(" ")[1];
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < count; j++) {
        answer += str[i];
      }
    }
    answer += "\n";
  }
  return answer;
}
console.log(solution(input));
