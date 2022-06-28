function solution(progresses, speeds) {
  var answer = [];

  let lastDays = [];
  for (let i = 0; i < progresses.length; i++) {
    let lastDay = Math.ceil((100 - progresses[i]) / speeds[i]);

    lastDays.push(lastDay);
  }
  while (lastDays.length > 0) {
    let counter = 1;

    let current = lastDays.shift();
    while (lastDays.length > 0) {
      if (lastDays[0] <= current) {
        counter++;
        lastDays.shift();
      } else break;
    }
    answer.push(counter);
  }

  return answer;
}

// 다른 사람 풀이를 참고한 두번째 풀이
// queue를 사용하기보다 index를 활용해서  while 중첩 반복문 대신 for 반복문을 사용.
// O(n^2) > O(n) 으로 성능개선

function solution(progresses, speeds) {
  var answer = [];

  let lastDays = [];
  for (let i = 0; i < progresses.length; i++) {
    let lastDay = Math.ceil((100 - progresses[i]) / speeds[i]);

    lastDays.push(lastDay);
  }
  let currProgress = lastDays.shift();
  let pt = 0;
  answer[pt] = 1;

  for (let i = 0; i < lastDays.length; i++) {
    if (lastDays[i] <= currProgress) {
      answer[pt] += 1;
    } else {
      currProgress = lastDays[i];
      pt++;
      answer[pt] = 1;
    }
  }

  return answer;
}
