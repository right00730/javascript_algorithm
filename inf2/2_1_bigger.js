function solution(value) {
  let answer = [];
  let target = 0;
  for (let num of value) {
    if (num > target) {
      answer.push(num);
    }
    target = num;
  }
  return answer;
}
function solution2(value) {
  let answer = [value[0]];

  for (let i = 1; i < value.length; i++) {
    if (value[i] > value[i - 1]) {
      answer.push(value[i]);
    }
  }
  return answer;
}

let requestValue = [7, 3, 9, 5, 6, 12];
console.log(solution2(requestValue));
