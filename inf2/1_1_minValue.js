function solution(a, b, c) {
  let min = a;
  for (let num of [b, c]) {
    if (a > num) min = num;
  }
  return min;
}

console.log(solution(6, 5, 11));
