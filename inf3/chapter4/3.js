function solution(n, m, scores) {
  let pair = [];
  for (let i = 1; i <= n; i++) {
    let pos = scores[0];
    for (let j = 0; j < m; j++) {
      let idx = scores[j].indexOf(i);
      pos = scores[j].filter((score, i) => pos.includes(score) && i > idx);
    }
    pos.forEach((ele) => pair.push([i, ele]));
  }
  return pair;
}

solution(4, 3, [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
