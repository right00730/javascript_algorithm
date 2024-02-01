function solution(str) {
  let answer = "";
  for (let char of str) {
    if (char.length > answer.length) {
      answer = char;
    }
  }
  return answer;
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
