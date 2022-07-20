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
    queue.push([time, time]);
  }
  let time = 0;
  queue.sort((a, b) => a - b);
  while (n > 0) {
    time++;
    let waitTime = queue.shift();
    if (waitTime[0] > time) {
      time = waitTime[0];
    }
    n--;
    queue.push([waitTime[0] + waitTime[1], waitTime[1]]);
    queue.sort((a, b) => a[0] - b[0]);
  }
  return time;
}
