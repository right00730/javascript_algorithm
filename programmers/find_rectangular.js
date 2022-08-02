//가장 큰 정사각형 찾ㅣ
//category : dp

// 처음시도 시 가로세로 길이만 저장 후 최솟값을 추출. > 그 사이 0이 들어오는 경우가 고려되지않음
//모든 요소들을 순회하며 해당 요소가 0이 아닐때 가질 수 있는 최대 정사각형의 한변의 넓이를 저장.
function solution(board) {
  let rowLen = board.length;
  let colLen = board[0].length;
  if (colLen === 1) {
    for (let i = 0; i < rowLen; i++) {
      if (board[i][0] === 1) return 1;
    }
  } else if (rowLen === 1) {
    for (let i = 0; i < colLen; i++) {
      if (board[0][i] === 1) return 1;
    }
  }
  let max = 0;
  let dp = board.slice();
  for (let i = 1; i < rowLen; i++) {
    for (let j = 1; j < colLen; j++) {
      if (board[i][j] !== 0) {
        let size = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        dp[i][j] = size;
        if (max < size) max = size;
      }
    }
  }

  return Math.pow(max, 2);
}

let test = [
  [0, 1, 1, 1],
  [1, 2, 2, 2],
  [1, 3, 3, 3],
  [0, 0, 4, 0],
];
let arr = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
console.log(solution(arr));
