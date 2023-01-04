function solution(values) {
  let n = values.length;
  let max = 0;
  let cross1 = 0;
  let cross2 = 0;
  for (let i = 0; i < n; i++) {
    let row = 0;
    let col = 0;
    cross1 = cross1 + values[i][i];
    cross2 = cross2 + values[n - i - 1][i];

    for (let j = 0; j < n; j++) {
      row = row + values[i][j];
      col = col + values[j][i];
    }

    max = Math.max(row, col, max);
  }
  max = Math.max(cross1, cross2, max);
  return max;
}

let requestValue = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(requestValue));
