//복습완료

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

// 테스트 1 〉	통과 (0.13ms, 30.2MB)
// 테스트 2 〉	통과 (0.13ms, 30.1MB)
// 테스트 3 〉	통과 (0.10ms, 29.7MB)
// 테스트 4 〉	통과 (1.56ms, 32.5MB)
// 테스트 5 〉	통과 (0.12ms, 30.1MB)
// 테스트 6 〉	통과 (0.10ms, 30.1MB)
// 테스트 7 〉	통과 (0.21ms, 30.1MB)
// 테스트 8 〉	통과 (0.49ms, 30MB)
// 테스트 9 〉	통과 (0.26ms, 30.2MB)
// 테스트 10 〉	통과 (0.30ms, 30.1MB)
// 테스트 11 〉	통과 (0.54ms, 29.9MB)

// 행과 열 바꿔서 풀어보기. 성능이 조금더 좋다.

function solution(board, moves) {
  var answer = 0;

  let stats = board.reduce(
    (current, row) => row.map((e, i) => [...(current[i] || []), row[i]]),
    []
  );

  let targets = stats.map((row) => row.filter((doll) => doll !== 0).reverse());
  let stack = [];
  for (let move of moves) {
    let doll = targets[move - 1].pop();
    if (!doll) continue;
    if (stack[stack.length - 1] === doll) {
      answer += 2;
      stack.pop();
    } else stack.push(doll);
  }

  return answer;
}

// 테스트 1 〉	통과 (0.18ms, 30.1MB)
// 테스트 2 〉	통과 (0.17ms, 30.1MB)
// 테스트 3 〉	통과 (0.20ms, 30MB)
// 테스트 4 〉	통과 (0.45ms, 30.4MB)
// 테스트 5 〉	통과 (0.17ms, 30MB)
// 테스트 6 〉	통과 (0.14ms, 30.2MB)
// 테스트 7 〉	통과 (0.19ms, 30.1MB)
// 테스트 8 〉	통과 (0.31ms, 30.3MB)
// 테스트 9 〉	통과 (0.25ms, 30.1MB)
// 테스트 10 〉	통과 (0.30ms, 30MB)
// 테스트 11 〉	통과 (0.37ms, 30.3MB)
