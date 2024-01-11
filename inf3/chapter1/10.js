function solution1(value) {
  let answer = value.replace(/#/g, "A");
  return answer;
}

function solution2(value) {
  let answer = "";
  for (let char of value) {
    if (char === "#") {
      answer += "A";
    } else {
      answer += char;
    }
  }
  return answer;
}
