function solution(value) {
  const score = value.split("");
  let rdx = 0;
  let answer = 0;
  for (let result of score) {
    if (+result) {
      rdx++;
    } else {
      rdx = 0;
    }
    answer += rdx;
  }
  return answer;
}
function solution(value) {
  let total = 0;
  value.split("").reduce((rdx, curr) => {
    if (+curr) {
      rdx++;
    } else {
      rdx = 0;
    }
    total += rdx;
    return rdx;
  }, 0);

  return total;
}
let requestValue = "1011100110";
console.log(solution(requestValue));
