//예산
//level 1,
//category : grid?

function solution(d, budget) {
  var answer = 0;
  let wanted = d.slice();
  wanted.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < wanted.length; i++) {
    if (sum + wanted[i] > budget) break;
    answer++;
    sum += wanted[i];
  }

  return answer;
}
