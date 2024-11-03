//Case1

function solution_1(n, k) {
  //n까지 담긴 배열 생성
  //n부터 lt = 0부터 순회하며 rt를 증가, 단, rt === 가 k가 되면 lt, rt 초기화
  //제외될때마다 last 인원 카운트. last가 1이되면 종료

  const princes = Array.from({ length: n }, () => 1);
  let last = n;
  let pt = 0;
  let cnt = 0;

  while (last > 1) {
    if (princes[pt] === 1) {
      cnt++;
    }

    if (cnt === k) {
      princes[pt] = 0;
      last = last - 1;
      cnt = 0;
    }
    pt++;
    pt = pt % n;
  }

  return princes.findIndex((ele) => ele === 1) + 1;
}

//Case2. use Queue
function solution(n, k) {
  const queue = Array.from({ length: n }, (v, i) => 1 + i);

  while (queue.length) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) return queue[0];
  }
}

console.log(solution(8, 3));
