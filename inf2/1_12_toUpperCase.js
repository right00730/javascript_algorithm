function solution(value) {
  return value.toUpperCase();
}
function solution2(value) {
  let answer = "";

  for (let txt of value) {
    let code = txt.charCodeAt();
    if (code >= 97 && code <= 122) {
      answer += String.fromCharCode(code - 32);
    } else {
      answer += txt;
    }
  }
  return answer;
}
function solution3(value) {
  let answer = "";

  for (let txt of value) {
    if (txt.toLowerCase() === txt) {
      answer += txt.toUpperCase();
    } else {
      answer += txt;
    }
  }
  return answer;
}
let requestValue = "ItisTimeToStudy";
console.log(solution3(requestValue));
