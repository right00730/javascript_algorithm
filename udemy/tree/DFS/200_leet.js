/**
 * @param {character[][]} grid
 * @return {number}
 */

// BFS보다 DFS성능이 더나음

var numIslands = function (grid) {
  //   섬을 찾아야한다. 각 조각은 4방향이 물또는 섬으로 연결되어잇따. 연결된 육지는 연결된섬이ㅗ 물로 둘러쌓인다면 1개의 섬을 구성한다.
  //첫번째 행열부터 육지인지 판별한다. 만약 섬이라면 그 주위에 다른 육지로 간다 연결된 모든 육지를 방문하고 더이상 연결된 육지가 없다면 하나의 섬이된다.
  // 이미 방문한 육지를 다시 방문하지않기 위해 방문한 육지는 0 즉 물로바꿔준다.
  // 육지를 발견하면 일단 연결된 모든 곳을 방문해야하므로 트리구조로 생각하면되며, 모든 노드를 탐색하는 트리 순회 방법을 사용한다. 깊이우선탐색으로 진행한다. 너비우선도 가능?
  //그리고 연결된 곳을 모두 밤문하면 새로운 섬을 찾기위해 배열을 순회해야한다.
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  function findLand(r, c) {
    let dr = [-1, 0, 1, 0];
    let dc = [0, 1, 0, -1];

    //            모래로된 사면을 방문해야한다 , 미리 이동해야하는 인덱스를 지정해두고 for문으로 돌린다
    // 배열 범위밖은 물이다. 갈필요가업삳
    for (let k = 0; k < 4; k++) {
      let tr = r + dr[k];
      let tc = c + dc[k];
      if (tr >= 0 && tr < m && tc >= 0 && tc < n && grid[tr][tc] === "1") {
        grid[tr][tc] = "0";
        findLand(tr, tc);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        console.log("find land!", i, j);
        grid[i][j] = "0";
        findLand(i, j);
        count++;
      }
    }
  }
  return count;
};
