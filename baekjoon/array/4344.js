const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");
const n = Number(input[0]);
const scores = input;

function solution(n, cases) {
  // 테스트 케이스별로 순회를 한다.
  for (let i = 1; i <= n; i++) {
    //학생수를 추출한다.
    const scores = cases[i].split(" ").map((x) => +x);
    const len = Number(scores[0]);
    //  점수의 총합을 구해  학생수를 이용해 평균을 구한다
    let sum = 0;
    let avg = 0;
    let count = 0;
    let answer = 0;
    for (let j = 1; j <= len; j++) {
      sum += scores[j];
    }
    avg = sum / len;

    //학생별로 평균을 넘는 학생의 수를 구한다.
    for (let j = 1; j <= len; j++) {
      if (scores[j] > avg) count++;
    }
    //학생수 / 전체학생수 * 100 으로 백분율을 구한다. 소숫점 셋째자리까지 반올림해야한다.
    answer = ((count / len) * 100).toFixed(3);
    //%를 붙여출력한다

    console.log(answer + "%");
  }
}

solution(n, scores);
