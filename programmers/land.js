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

function solution(land) {
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
      let max = Math.max.apply(null, land[i]);
      let idx = land[i].indexOf(max);
      let nextMax = land[i].slice().sort((a, b) => a - b)[1];

      console.log(max, idx, nextMax);

      for (let j = 0; j < 4; j++) {
        if (j !== idx) {
          dp[j] = dp[j] + max;
        } else {
          dp[j] = dp[j] + nextMax;
        }
      }
    }
  }
  answer = Math.max.apply(null, dp);
  return answer;
}
console.log(
  solution([
    [1, 1, 1, 1],
    [2, 2, 2, 3],
    [3, 3, 3, 6],
    [4, 4, 4, 7],
  ])
);
