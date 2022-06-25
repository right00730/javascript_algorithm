//  프로그래머스
// level1

function solution(numbers) {
  var answer = 0;
  const temp = Array.from({ length: 10 }, () => -1);
  for (num of numbers) {
    temp[num] = num;
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === -1) answer += i;
  }

  return answer;
}

// 다른 사람 풀이 참조. 0~9 까지 다 더한값에서 reduce로 순차적으로 차감해주면된다.
// 훨씬 시간 감소
function solution(numbers) {
  let answer;
  answer = numbers.reduce((pre, curr) => {
    return pre - curr;
  }, 45);

  return answer;
}
