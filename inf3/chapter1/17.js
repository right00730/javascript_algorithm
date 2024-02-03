function solution(strings) {
  let answer1 = [];
  let answer2 = [];

  //Case 1. Use Filter and indexOf
  answer1 = strings.filter((str, i) => strings.indexOf(str) === i);

  //Case 2. Use includes
  for (let char of str) {
    if (!answer2.includes(char)) {
      answer2.push(char);
    }
  }
  return answer2;
}
let str = ["good", "time", "time", "good", "student"];
console.log(solution(str));
