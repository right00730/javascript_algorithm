//행렬 테두리 회전하기
//for문?
// 아직 미채점 - 프로그래머스 오류

function solution(rows, columns, queries) {
  var answer = [];
  let idx = 1;
  let board = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => idx++)
  );

  queries.forEach((query) => {
    let right = query[3] - 1;
    let top = query[0] - 1;
    let bottom = query[2] - 1;
    let left = query[1] - 1;
    let [x, y] = [top, left];
    let currentNum = board[x][y];
    let min = currentNum;
    y++;

    for (y; y < right; y++) {
      let temp = board[x][y];
      board[x][y] = currentNum;
      currentNum = temp;
      if (currentNum < min) min = currentNum;
    }

    for (x; x < bottom; x++) {
      let temp = board[x][y];
      board[x][y] = currentNum;
      currentNum = temp;
      if (currentNum < min) min = currentNum;
    }

    for (y; y > left; y--) {
      let temp = board[x][y];
      board[x][y] = currentNum;
      currentNum = temp;
      if (currentNum < min) min = currentNum;
    }

    for (x; x >= top; x--) {
      let temp = board[x][y];
      board[x][y] = currentNum;
      currentNum = temp;
      if (currentNum < min) min = currentNum;
    }

    answer.push(min);
  });
  return answer;
}
