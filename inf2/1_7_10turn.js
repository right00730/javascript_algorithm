function solution2(day, values) {
  const carNumbers = values.split(" ");
  let count = 0;
  for (let carNum of carNumbers) {
    if (+carNum[carNum.length - 1] === day) {
      count++;
    }
  }
  return count;
}
function solution(day, values) {
  const carNumbers = values.split(" ");
  let count = 0;
  for (let carNum of carNumbers) {
    if (carNum % 10 === day) {
      count++;
    }
  }
  return count;
}
let requestValue = "12 20 54 30 87 91 30";
console.log(solution(0, requestValue));
