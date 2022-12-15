function solution1(values) {
  const minValue = Math.min(...values);
  return minValue;
}
function solution2(values) {
  let min = values[0];
  for (let value of values) {
    if (value < min) {
      min = value;
    }
  }
  return min;
}

let requestValue = [5, 3, 7, 11, 2, 15, 17];
console.log(solution2(requestValue));
