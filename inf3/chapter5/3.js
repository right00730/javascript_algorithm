function solution(m, arr) {
  let count = 0;
  let lpt = 0;
  let rpt = 0;
  let sum = arr[lpt];

  while (lpt < arr.length) {
    if (sum === m) {
      count++;
      sum += arr[++rpt];
      sum -= arr[lpt++];
      continue;
    }

    if (sum < m) {
      sum += arr[++rpt];
      continue;
    }
    sum -= arr[lpt++];
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
