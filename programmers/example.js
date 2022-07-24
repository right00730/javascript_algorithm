//모의고사
//level : 1
//category : 완전탐색
function solution(answers) {
  var answer = [];
  let checked = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let max = 0;
  checked = checked.map((check, i) => {
    let answerCnt = 0;
    let pt = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === check[pt]) answerCnt++;
      pt++;
      if (pt === check.length) pt = 0;
    }

    if (max < answerCnt) {
      max = answerCnt;
      answer = [i + 1];
    } else if (max === answerCnt) answer.push(i + 1);
  });

  return answer;
}

//수정된 풀이
//filter와 모드연산자를 활용.
//일부케이스에서 테스트 시간감소.
//기존 풀이가 O(3n)의 시간복잡도를 갖는다면 O(n)으로 풀이할 수 있으므로 시간적 성능은 유사하나 조금 더 개선.
function solution(answers) {
  let check1 = [1, 2, 3, 4, 5];
  let check2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer1 = answers.filter(
    (answer, i) => answer === check1[i % check1.length]
  ).length;
  let answer2 = answers.filter(
    (answer, i) => answer === check2[i % check2.length]
  ).length;
  let answer3 = answers.filter(
    (answer, i) => answer === check3[i % check3.length]
  ).length;

  let answer = [];

  let max = Math.max(answer1, answer2, answer3);

  if (max === answer1) answer.push(1);
  if (max === answer2) answer.push(2);
  if (max === answer3) answer.push(3);

  return answer;
}
