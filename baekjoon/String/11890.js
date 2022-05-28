// 복습 필요
//객체 값이 0일때 제대로 처리하기. 단순 값만 비교하면 0도 falthy로 인식됨

// // input :  영소문자, 영대문자, 숫자
// // ouput : 입력값의 아스키코드

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();
function solution(str) {
  const lookup = {};
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (lookup[char] === undefined) lookup[char] = i;
  }
  console.log(lookup);
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    if (char in lookup) answer.push(lookup[char]);
    else answer.push(-1);
  }
  return answer.join(" ");
}

console.log(solution(input));
