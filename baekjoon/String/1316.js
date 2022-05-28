const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

function solution(cases) {
  let answer = 0;
  for (let i = 1; i < cases.length; i++) {
    let str = cases[i].trim();
    if (testCase2(str)) answer++;
  }
  return answer;
}

function testCase(str) {
  //단어별로 순회하며  객체에 해당 단어를 담음.
  let lookup = {};
  for (let char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  // pointer 두개로 이동하는데 만약 앞이랑 뒤가 다르면 lookup내 앞의값의 value랑 인덱스+1이랑  다른지 검토
  let start = 0;
  let end = 0;
  for (end; end < str.length; end++) {
    if (str[start] !== str[end]) {
      if (lookup[str[start]] !== end - start) return false;
      else {
        start = end;
      }
    }
  }
  if (lookup[str[start]] !== end - start) return false;
  return true;
}

function testCase2(str) {
  if (str.length === 0) return;
  let ch = Array.from({ length: 123 }, () => false);
  let charCode = str[0].charCodeAt();
  ch[charCode] = true;
  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    if (char !== str[i - 1]) {
      let charCode = char.charCodeAt();
      if (!ch[charCode]) return false;
      else ch[charCode] = true;
    }
  }
  return true;
}

console.log(solution(input));
