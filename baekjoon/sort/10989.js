const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  let res = radixSort(input.slice(1));
  // console.log(res);
  res = res.join("\n");
  console.log(res);
  process.exit();
});

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  else {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
}
function maxDigitCount(arr) {
  let max = 0;
  for (let number of arr) {
    max = Math.max(max, digitCount(number));
  }
  return max;
}

function radixSort(arr) {
  let maxDigit = maxDigitCount(arr);
  for (let i = 0; i < maxDigit; i++) {
    let bugket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bugket[digit].push(arr[j]);
    }
    arr = [].concat(...bugket);
  }
  return arr;
}
