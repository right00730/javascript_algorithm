function solution(value) {
  let answer = "";
  for (let txt of value) {
    console.log(txt.charCodeAt());
    if (txt.charCodeAt() === 65) {
      answer = answer + "#";
    } else {
      answer = answer + txt;
    }
  }
  return answer;
}

let requestValue = "BANANA";
console.log(solution(requestValue));
