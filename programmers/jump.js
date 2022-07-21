//멀리뛰기
//DFS > stackoverflow
//BFS > long long time
function solution1(n) {
  var answer = 0;
  function DFS(dist) {
    if (dist >= n) {
      if (dist === n) answer++;
    } else {
      DFS(dist + 1);
      DFS(dist + 2);
    }
  }
  DFS(0);

  return answer % 1234567;
}

//dp 활용하기
function solution(n) {
  var answer = 0;
  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  //칸을 도달하는 경우는 1개 혹은 2개 즉, 1개 전 칸에서 1개 건너는 경우, 2 전 칸에서 건너는 경우
  // 즉 n 번째 칸의 도달하는 경우는 1개전 칸에 도달하는 경우 + 2개전 칸에 도달하는 경우 이다.
  //n이 클경우 overflow가 발생할 수 있으므로 1234567로 나눈다 (모드너 법칙)
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] % 1234567) + (dp[i - 2] % 1234567);
  }
  answer = dp[n];
  if (n > 44957) {
  }
  return answer % 1234567;
}
