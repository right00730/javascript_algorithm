function solution(str, value) {
  let answer = str.split("").reduce((count, char) => (char == value ? ++count : count), 0);

  return answer;
}
const result = solution1_10("COMPUTERPROGRAMING", "R");
console.log(result);
