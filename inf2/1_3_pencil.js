function solution(studentCount) {
  const minCount = Math.ceil(studentCount / 12);
  return minCount;
}
function solution2(studentCount) {
  let minCount = Math.floor(studentCount / 12);
  if (studentCount % 12) {
    minCount++;
  }

  return minCount;
}
let requestValue = 178;
console.log(solution2(requestValue));
