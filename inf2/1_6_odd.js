function solution(values) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      sum += +values[i];
      if (min > values[i]) {
        min = values[i];
      }
    }
  }
  return { sum, min };
}
function solution2(values) {
  let sum = 0;
  const odds = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 1) {
      odds.push(values[i]);
      sum += +values[i];
    }
  }

  let min = Math.min(...odds);
  return { sum, min };
}
let requestValue = "12 77 38 41 53 92 85";
console.log(solution2(requestValue.split(" ")));
