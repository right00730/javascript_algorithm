const solution = (boards) => {
  const len = boards.length;
  let diagonal = 0;
  let inverseDiagonal = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    let horizontal = 0;
    let vertical = 0;
    for (let j = 0; j < len; j++) {
      horizontal += boards[i][j];
      vertical += boards[j][i];
    }
    diagonal += boards[i][i];
    inverseDiagonal += boards[i][len - i - 1];

    max = Math.max(horizontal, vertical, diagonal, inverseDiagonal);
  }
  return max;
};

let arr = [
  [10, 13, 10, 12, 14],
  [12, 39, 30, 30, 11],
  [11, 25, 50, 53, 15],
  [19, 40, 29, 37, 27],
  [25, 13, 30, 13, 19],
];
console.log(solution(arr));
