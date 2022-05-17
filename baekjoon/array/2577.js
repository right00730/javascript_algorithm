const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

//1문자열화하기 for문돌리기

function solution(numbers) {
  // 세개의 자연수를 곱한다.
  const answer = {};
  for (let i = 0; i <= 9; i++) {
    answer[i] = 0;
  }
  let calcNum = String(
    numbers.reduce((pre, curr) => {
      return pre * curr;
    })
  );
  //곱한 결과의 수의 각 자릿수마다 어떤 숫자 확인 후

  for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < calcNum.length; j++) {
      if (Number(calcNum[j]) === i) count++;
    }
    console.log(count);
  }
}

solution(input);
// 2. 숫자 %10을 해서 1의 자리 추출

function solution(numbers) {
  const answer = {};
  for (let i = 0; i <= 9; i++) {
    answer[i] = 0;
  }
  let calcNum = numbers.reduce((pre, curr) => {
    return pre * curr;
  });
  while (calcNum > 0) {
    const key = calcNum % 10;
    answer[key]++;
    calcNum = Math.floor(calcNum / 10);
  }
  for (let value of Object.values(answer)) {
    console.log(value);
  }
}
