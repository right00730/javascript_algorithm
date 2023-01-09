function solution(values) {
  //for문을 돌면서 상하좌우보다 큰  값인 요소 갯수 count

  let n = values.length;
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];
  let answer = [];
  for (let i = 0; i < n; i++) {
    inner: for (let j = 0; j < n; j++) {
      const ele = values[i][j];

      for (let k = 0; k < 4; k++) {
        let ry = i + dy[k];
        let rx = j + dx[k];
        if (ry >= 0 && ry < n && rx >= 0 && rx < n && ele <= values[ry][rx]) {
          console.log(`x : ${rx} , y : ${ry} , elements :${values[ry][rx]}`);
          continue inner;
        }
      }

      answer.push(ele);
    }
  }
  return answer.length;
}

let requestValue = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(requestValue));
