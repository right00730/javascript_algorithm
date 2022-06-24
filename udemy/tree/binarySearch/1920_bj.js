const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

function solution(input) {
  const n = input[0];
  const A = input[1]
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => a - b);
  const nums = input[3].split(" ");
  let result = "";
  for (let x of nums) {
    result += findX(A, Number(x)) + "\n";
  }
  return result;
}
function findX(arr, x) {
  let sp = 0;
  let ep = arr.length - 1;

  while (sp <= ep) {
    let mid = Math.floor((sp + ep) / 2);

    if (arr[mid] === x) return 1;
    else if (arr[mid] > x) ep = mid - 1;
    else sp = mid + 1;
  }
  return 0;
}

console.log(solution(input));
