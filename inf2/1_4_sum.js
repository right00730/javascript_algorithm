function solution(value) {
  let total = value;
  for (let i = 1; i < value; i++) {
    total = total + i;
  }
  return total;
}

let requestValue = 10;
console.log(solution(requestValue));
