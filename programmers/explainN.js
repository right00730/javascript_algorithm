function solution(N, number) {
  if (N === number) return 1;
  var answer = -1;

  let tempNum = 0;
  let dp = [[]];
  for (let i = 1; i <= 8; i++) {
    dp[i] = [tempNum];

    for (let k = 1; k <= i; k++) {
      tempNum = Number(String(N).repeat(k));
      let idx = i - k;
      dp[i].push(tempNum);
      // if(N-i<1) continue;
      let len = dp[idx].length;
      let temp = new Set();
      for (let j = 0; j < len; j++) {
        temp.add(dp[idx][j] + N);
        temp.add(dp[idx][j] - N);
        temp.add(dp[idx][j] * N);
        if (dp[idx][j] !== 0) temp.add(Math.floor(dp[idx][j] / N));
      }
      dp[i].push(...temp);
      console.log("new!", dp[i].slice());
    }

    const finder = dp[i].indexOf(number);
    if (finder !== -1) return i;
  }

  return answer;
}
console.log(solution(1, 1121));
