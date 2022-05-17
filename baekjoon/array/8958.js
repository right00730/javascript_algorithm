const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const n = Number(input[0]);
const scores = input;

function solution(n, scores) {
  // 케이스별로  순회를 한다
  for (let j = 1; j <= n; j++) {
    const score = scores[j];
    // 각 케이스 안에서 OX 퀴즈 결과를 각 문자별로 분리한다.
    // score = score.split("");
    // 하나씩 순서대로 순회하며 지금값이 O 이전값이 O이면
    // 상태변수에 +1를 해준다. 만약 이전값이 X라면 상태변수에 +1 또는 0을 설정한다
    //1. 상태변수를 즉시 정답변수에 더하기
    let answer = 0;
    let count = 0;
    for (let i = 0; i < score.length; i++) {
      if (score[i] === "O") {
        count++;
        answer += count;
      } else count = 0;
    }
    console.log(answer);
  }
  //정답변수를 출력한다. 다음 순회를 (케이스)를 진행한다.
}
solution(n, scores);
