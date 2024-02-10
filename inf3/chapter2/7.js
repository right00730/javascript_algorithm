const solution = (inputs) => {
  let len = inputs.length;
  let answer = 0;
  let dy = [0, 1, 0, -1];
  let dx = [-1, 0, 1, 0];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let target = inputs[i][j];
      let isMax = true;

      for (let pt = 0; pt < 4; pt++) {
        let x = i + dx[pt];
        let y = j + dy[pt];

        if (x >= 0 && y >= 0 && x < len && y < len && inputs[x][y] >= target) {
          isMax = false;
        }
      }
      if (isMax) {
        answer++;
      }
    }
  }
  return answer;
};

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
