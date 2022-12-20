function solution(value) {
  let answer = "";

  for (let txt of value) {
    if (!answer.includes(txt)) {
      answer += txt;
    }
  }
  return answer;
}
function solution(value) {
  let answer = "";

  for (let txt of value) {
    if (answer.indexOf(txt) === -1) {
      answer += txt;
    }
  }
  return answer;
}
let requestValue = "ksekkset";
console.log(solution(requestValue));
