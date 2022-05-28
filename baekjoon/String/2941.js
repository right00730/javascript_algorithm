// solution2 - rpelace사용방법만 다시풀기 / 복습

// 서치해보니 모두 if문으로 문자를 비교하거나 replace를 사용
const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
function solution(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (i >= str.length - 1) {
      answer++;
      continue;
    }
    if (char === "c") {
      if (str[i + 1] === "=" || str[i + 1] === "-") i++;
    } else if (char === "d") {
      if (str[i + 1] === "-") i++;
      else if (i < str.length - 2 && str[i + 1] === "z" && str[i + 2] === "=")
        i += 2;
    } else if (char === "l" || char === "n") {
      if (str[i + 1] === "j") i++;
    } else if (char === "s" || char === "z") {
      if (str[i + 1] === "=") i++;
    }
    answer++;
  }
  return answer;
}

// use replace - 정규식 사용방법 잘 기억하기
function solution2(str) {
  str = str.trim();
  let items = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (let item of items) {
    let regexOne = new RegExp(item, "g");
    str = str.replace(regexOne, "*");
  }
  return str.length;
}

console.log(solution2(input[0]));
