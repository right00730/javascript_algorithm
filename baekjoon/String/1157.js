// inpur 알파벳 대소문자
// output 가장 많이 사용된 알파벳 -str, 대소문자 구분없이  2개이상이면 ?
//

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();
function solution(str) {
  const lookup = {};
  for (let text of str) {
    const upperText = text.toUpperCase();
    lookup[upperText] = (lookup[upperText] || 0) + 1;
  }
  let max = 0;
  for (let key of Object.keys(lookup)) {
    if (lookup[key] > max) {
      max = lookup[key];
    }
  }
  let answer = [];
  for (let key of Object.keys(lookup)) {
    if (lookup[key] === max) {
      answer.push(key);
    }
  }
  if (answer.length > 1) return "?";
  else return String(answer);
}

// solution2
function solution2(str) {
  const lookup = Array.from({ length: 26 }, () => 0);
  str = str.toUpperCase();
  for (let text of str) {
    let charCod = text.charCodeAt();

    lookup[charCod - 65] += 1;
  }
  const max = Math.max.apply(null, lookup);
  let answer =
    lookup.filter((value) => value === max).length === 1
      ? String.fromCharCode(lookup.findIndex((v) => v === max) + 65)
      : "?";
  return answer;
}

// 오답
function solution3(str) {
  console.log(str);
  const lookup = {};
  for (let text of str) {
    const upperText = text.toUpperCase();
    lookup[upperText] = (lookup[upperText] || 0) + 1;
  }
  let max = 0;
  let answer = [];
  for (let key of Object.keys(lookup)) {
    if (lookup[key] > max) {
      answer = [key];
      max = lookup[key];
    } else if (lookup[key] === max) answer.push(key);
  }
  if (answer.length > 1) return "?";
  else return String(answer);
}
console.log(solution3(input));
