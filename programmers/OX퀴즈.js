//*eval함수는 안전하지 않으므로 고려하지 않는다.

//초기 풀이 : index를 활용
function solution(quiz) {
  return quiz.map((problem) => {
    problem = problem.split(" ");
    if (problem[1] === "-") {
      return +problem[0] - +problem[2] == +problem[4] ? "O" : "X";
    } else {
      return +problem[0] + +problem[2] == +problem[4] ? "O" : "X";
    }
  });
  return answer;
}

//다른 풀이를 참고한 풀이
function solution(quiz) {
  return quiz.map((q) => {
    const [calc, answer] = q.split(" = ");
    const type = calc.includes("+") ? 1 : -1;
    const [x, y] = calc.split(type === 1 ? " + " : " - ");
    return +x + +y * type === +answer ? "O" : "X";
  });
}
