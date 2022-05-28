// 복습하기
function solution() {
  const flagNum = 100;
  let answer = "";
  let ch = Array.from({ length: flagNum + 1 }, () => 0);
  for (let i = 1; i <= flagNum; i++) {
    const num = createNum(i);
    if (num <= flagNum) ch[num] = 1;
  }
  for (let i = 1; i <= ch.length; i++) {
    if (ch[i] < 1) {
      answer += i + "\n";
    }
  }
  return answer;
}
function createNum(n) {
  let sum = n;
  // 1. reduce사용방법
  // sum = String(n)
  //   .split("")
  //   .reduce((pre, curr) => {
  //     return Number(pre) + Number(curr);
  //   }, 0);

  // 2 . while로 반복 > 문자열화 과정이 불필요
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(solution());
