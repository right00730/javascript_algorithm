function solution(value, target) {
  let count = 0;

  for (let txt of value) {
    if (txt === target) {
      count++;
    }
  }
  return count;
}
function solution2(value, target) {
  let len = value.split(target).length;

  return len - 1;
}
let requestValue = "COMPUTERPROGRAMMING";
console.log(solution2(requestValue, "R"));
