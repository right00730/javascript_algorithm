const solution2 = (round, a, b) => {
  let answer = [];
  for (let i = 0; i < round; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    } else if (b[i] === 1 && a[i] === 3) {
      answer.push("B");
    } else if (b[i] > a[i]) {
      answer.push("B");
    } else {
      answer.push("A");
    }
  }
  return answer;
};
const solution = (round, a, b) => {
  let answer = [];
  let winCases = [0, 2, 3, 1];
  for (let i = 0; i < round; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    } else if (b[i] === winCases[a[i]]) {
      answer.push("B");
    } else {
      answer.push("A");
    }
  }
  return answer;
};
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(5, a, b));
