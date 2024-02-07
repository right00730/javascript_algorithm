const solution = (scores) => {
  let answer = [];
  const sortedScores = [...scores].sort((a, b) => b - a);

  for (let score of scores) {
    const rank = sortedScores.indexOf(score) + 1;
    answer.push(rank);
  }

  return answer;
};

const solution2 = (scores) => {
  let answer = Array.from({ length: scores.length }, () => 1);

  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (scores[j] > scores[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
};

let arr = [87, 89, 92, 100, 76];
console.log(solution2(arr));
