function solution(cases) {
  let answer = [];
  const Acase = cases[0];
  const Bcase = cases[1];
  for (let i = 0; i < cases[0].length; i++) {
    if (Acase[i] === Bcase[i]) {
      answer.push("D");
    } else if (
      Acase[i] + 1 === Bcase[i] ||
      (Bcase[i] === 1 && Acase[i] === 3)
    ) {
      answer.push("B");
    } else {
      answer.push("A");
    }
  }
  return answer;
}

let requestValue = [
  [2, 3, 3, 1, 3],
  [1, 1, 2, 2, 3],
];
console.log(solution(requestValue));
