//1. 문제가 맞는 경우 점수를 추가한다. 연속 정답 수를 기록하여 연속 정답 수를 더준ㅏ.

const solution = (result) => {
  let answer = 0;
  let continueCount = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      continueCount++;
      answer += continueCount;
    } else {
      continueCount = 0;
    }
  }

  return answer;
};
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
