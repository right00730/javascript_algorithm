const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");

// input 두개의 같지않은 세자리 숫자. 0은 포함되지않는다.
//ouput : 두개의 같지않은 숫자를 뒤집은 숫자 중 큰 수

function solution(numbers) {
  let [A, B] = numbers.trim().split(" ");
  let reversA = "" + A[2] + A[1] + A[0];
  let reversB = "" + B[2] + B[1] + B[0];
  let answer = Math.max(Number(reversA), Number(reversB));
  return answer;
}

function solution2(numbers) {
  let tmpNumA = 0;
  let tmpNumB = 0;
  let [A, B] = numbers.trim().split(" ");
  console.log(A, B);
  tmpNumA += A[2] * 100;
  tmpNumA += A[1] * 10;
  tmpNumA += A[0] * 1;
  tmpNumB += B[2] * 100;
  tmpNumB += B[1] * 10;
  tmpNumB += B[0] * 1;
  let answer = Math.max(tmpNumA, tmpNumB);
  return answer;
}
console.log(solution2(input[0]));
