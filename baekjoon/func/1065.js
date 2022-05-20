let fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();

function solution(n) {
  if (+n < 100) return n;
  let count = 99;
  // input : 1 <= n <= 1000
  //output : 한수의 갯수
  //1~1000부터 각 숫자로 한수인지 확인한다. 한수라면 count+1한다.
  for (let i = 100; i <= n; i++) {
    if (isHansu(String(i))) count++;
  }
  //count를 반환다.
  return count;
}

// 한수fuc : n을 받아서 각 자리수가 등차수열인지 확인한다
//각 자리수가 일정하게 증가, 감소하면됨
function isHansu(n) {
  let len = n.length;
  if (n <= 1) return true;
  let num = n[1] - n[0];
  for (let i = 2; i < len; i++) {
    if (+n[i] - +n[i - 1] !== num) {
      return false;
    }
  }
  return true;
}
console.log(solution(Number(input)));
