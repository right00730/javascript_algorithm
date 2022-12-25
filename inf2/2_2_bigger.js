function solution(talls) {
  const answer = [];
  answer.push(talls[0]);

  for (let i = 1; i < talls.length; i++) {
    if (talls[i] > answer[answer.length - 1]) {
      answer.push(talls[i]);
    }
  }
  return answer.length;
}

let requestValue = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(requestValue));
