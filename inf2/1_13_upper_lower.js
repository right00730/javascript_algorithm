function solution(value) {
  let answer = "";
  for (let txt of value) {
    let code = txt.charCodeAt();

    if (code >= 65 && code <= 90) {
      answer += txt.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      answer += txt.toUpperCase();
    }
  }
  return answer;
}
function solution(value) {
  let answer = "";
  for (let txt of value) {
    if (txt === txt.toUpperCase()) {
      answer += txt.toLowerCase();
    } else if (txt === txt.toLowerCase()) {
      answer += txt.toUpperCase();
    }
  }
  return answer;
}
let requestValue = "StuDY";
console.log(solution(requestValue));
