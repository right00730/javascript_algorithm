// 알파벳
//최소시간
const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
function solution(str) {
  let lookup = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    inner: for (let j = 0; j < lookup.length; j++) {
      if (lookup[j].includes(str[i])) {
        sum += j + 3;
        break inner;
      }
    }
  }

  return sum;
}

console.log(anotherSolution(input[0]));

function anotherSolution(str) {
  let answer = 0;

  for (let spel of str) {
    answer += 2;
    switch (spel) {
      case "W":
      case "X":
      case "Y":
      case "Z":
        answer += 1;
      case "T":
      case "U":
      case "V":
        answer += 1;
      case "P":
      case "Q":
      case "R":
      case "S":
        answer += 1;
      case "M":
      case "N":
      case "O":
        answer += 1;
      case "J":
      case "K":
      case "L":
        answer += 1;
      case "G":
      case "H":
      case "I":
        answer += 1;
      case "D":
      case "E":
      case "F":
        answer += 1;
      case "A":
      case "B":
      case "C":
        answer += 1;
      default:
        answer += 0;
    }
  }
  return answer;
}
