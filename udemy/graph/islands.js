var closedIsland = function (grid) {
  let fail = false;
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      fail = false;
      if (grid[i][j] === 0) {
        grid[i][j] = 1;
        DFS(i, j);
        if (fail === false) {
          answer++;
        }
      }
    }
  }

  function DFS(i, j) {
    if (
      i === 0 ||
      i === grid.length - 1 ||
      j === 0 ||
      j === grid[i].length - 1
    ) {
      fail = true;
    }

    for (let k = 0; k < 4; k++) {
      let x = i + dx[k];
      let y = j + dy[k];

      if (
        x >= 0 &&
        x < grid.length &&
        y >= 0 &&
        y < grid[i].length &&
        grid[x][y] === 0
      ) {
        grid[x][y] = 1;
        DFS(x, y);
      }
    }
  }
  return answer;
};
//1,6 > 1,5?
const arr = [
  [1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
];
// const arr = [
//   [1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
//   [0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
//   [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
//   [X, 1, 1, 1, 0, 1, 0, 1, 0, 0],
//   [1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//   [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
//   [1, 1, 0, 1, 1, 0, 1, X, 1, 1],
//   [X, X, 1, 1, 1, 0, 1, X, 1, 1],
//   [1, X, X, 1, 1, 1, 1, X, 1, 1],
// ];

console.log(closedIsland(arr));
