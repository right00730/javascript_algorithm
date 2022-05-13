//  기본 입출력 처리 연습
//곱셈

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const [A, B] = input[0].split(" ").map((x) => +x);
console.log(A * B);
