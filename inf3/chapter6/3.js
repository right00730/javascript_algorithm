function solution(board, moves) {
  let stack = [];
  let hit = 0;

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      let target = board[i][move - 1];
      if (target === 0) continue;

      board[i][move - 1] = 0;
      if (stack[stack.length - 1] === target) {
        stack.pop();
        hit += 2;
      } else {
        stack.push(target);
      }
      break;
    }
  }

  return hit;
}
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);
