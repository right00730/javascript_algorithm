function solution(n, k, numbers) {
  const numSet = new Set();

  function dfs(cnt, sum, pt) {
    if (cnt === 3) {
      numSet.add(sum);
      return;
    }

    for (let i = pt; i < numbers.length; i++) {
      dfs(cnt + 1, sum + numbers[i], i + 1);
    }
  }

  dfs(0, 0, 0);
  const numArr = Array.from(numSet);
  numArr.sort((a, b) => b - a);

  return numArr[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));
