// input :  영소문자, 영대문자, 숫자
// ouput : 입력값의 아스키코드

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();
function solution(value) {
  if (isNaN(value)) {
    return value.charCodeAt();
  } else {
    return Number(value) + 48;
  }
}
console.log(solution(input));
