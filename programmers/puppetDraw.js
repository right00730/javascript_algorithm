// 크레인 인형뽑기
//stack을 사용한다.
function solution(board, moves) {
  var answer = 0;
  let stack = [];

  moves.forEach((move) => {
    move = move - 1;
    turn: for (let i = 0; i < board.length; i++) {
      if (board[i][move] !== 0) {
        if (stack[stack.length - 1] === board[i][move]) {
          stack.pop();
          answer += 2;
        } else stack.push(board[i][move]);

        board[i][move] = 0;
        break turn;
      }
    }
  });

  return answer;
}

// 행과 열 바꿔서 풀어보기.
