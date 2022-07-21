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
