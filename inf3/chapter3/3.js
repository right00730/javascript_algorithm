function solution(str) {
  let answer = "";
  for (let char of str) {
    if (!isNaN(Number(char))) {
      answer += char;
    }
  }

  return Number(answer);
}

function solution2(str) {
  let answer = "";
  for (let char of str) {
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      answer += char;
    }
  }

  return Number(answer);
}

let str = "g0en2T0s8eSof5t";
console.log(solution2(str));
