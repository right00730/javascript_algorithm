//땅따먹기

//DFS > 시간초과
function solution1(land) {
  var answer = 0;
  let len = land.length;
  function DFS(L, sum, before) {
    if (L === len) {
      answer = Math.max(sum, answer);
      return;
    } else {
      for (let i = 0; i < land[L].length; i++) {
        if (i !== before) {
          DFS(L + 1, sum + land[L][i], i);
        }
      }
    }
  }
  DFS(0, 0, -1);

  return answer;
}
// 테스트  20초대 실행
//효율성 테스트 시간초과
function solution2(land) {
  var answer = 0;
  let len = land.length;
  let dp = Array.from({ length: len }, () => 0);
  let before = -1;

  //행 순회
  for (let i = 0; i < land.length; i++) {
    //열 순회
    if (i === 0) {
      for (let j = 0; j < 4; j++) {
        dp[j] = land[i][j];
      }
    } else {
      let max = Math.max.apply(null, dp);
      let idx = dp.indexOf(max);
      let nextMax = dp.slice().sort((a, b) => b - a)[1];
      for (let j = 0; j < 4; j++) {
        if (j !== idx) {
          dp[j] = land[i][j] + max;
        } else {
          dp[j] = land[i][j] + nextMax;
        }
      }
    }
  }
  answer = Math.max.apply(null, dp);
  return answer;
}

//테스트케이스 0초대,
//효율성 개선.  20초대
function solution(land) {
  var answer = 0;
  let log = land.slice();
  let len = land.length;
  let dp = Array.from({ length: len }, () => 0);

  //행 순회
  for (let i = 1; i < land.length; i++) {
    let max = Math.max(...log[i - 1]);
    let idx = log[i - 1].indexOf(max);
    let next = 0;
    for (let j = 0; j < 4; j++) {
      if (j !== idx) {
        log[i][j] += max;
        if (next < log[i - 1][j]) next = log[i - 1][j];
      }
    }
    log[i][idx] += next;
  }
  answer = Math.max(...log[log.length - 1]);
  return answer;
}
console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
);
