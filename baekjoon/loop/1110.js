const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString();

/*복습 필!!! */
console.log(solution(input));
function solution(num) {
  let count = 0;
  let newNumber = num;
  do {
    if (newNumber < 10) newNumber = "0" + newNumber;
    const sumNumber = (Math.floor(newNumber / 10) + (newNumber % 10)) % 10;
    newNumber = "" + (newNumber % 10) + sumNumber;
    count++;
  } while (num != Number(newNumber));
  return count;
}
