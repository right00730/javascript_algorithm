//입국 심사
//level2
//현재 일부케이스에서 오류발생
//우선순위 큐 대신 이분탐색 사용?
//자바스크립트 mamxium
function solution(n, times) {
  //input : 입국 심사 대기인원 수, 심사관들이 한명 심사시 걸리는 시간

  var answer = 0;
  let queue = [];

  for (let time of times) {
    //[종료예정시간, 기본 시간]
    queue.push([time, time]);
  }
  queue.sort((a, b) => a[0] - b[0]);

  let time = 0;

  while (n > 0) {
    let waitTime = queue.shift();
    //가장 빠른 종료예정시간 > 현재시간
    if (waitTime[0] >= time) {
      time = waitTime[0];
    } else {
      time++;
    }
    n--;
    queue.push([waitTime[0] + waitTime[1], waitTime[1]]);
    queue.sort((a, b) => a[0] - b[0]);
  }
  return time;
}

//결정 알고리즘
function solution(n, times) {
  let answer = Number.MAX_SAFE_INTEGER;

  //input : 입국 심사 대기인원 수, 심사관들이 한명 심사시 걸리는 시간
  let lt = 0;
  let rt = Math.max.apply(null, times) * n;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (counter(mid, times) >= n) {
      answer = Math.min(mid, answer);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

function counter(time, examiners) {
  let count = 0;
  for (let examiner of examiners) {
    count += Math.floor(time / examiner);
  }
  return count;
}
