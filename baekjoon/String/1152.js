const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");

//input : 대소문자 공백으로 이루어진 문자열
// 문자열이 갖고있는 단어를 ㅊㅈ아라. 같은 단어라도 무조건 카운트
//output : 단어의 갯수

// 빈 공백케이스 조심하기

function solution(str) {
  str = str.trim();
  let answer = 0;
  const strArr = str.split(" ");

  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== "") answer++;
  }

  return answer;
}
console.log(solution(input[0]));
