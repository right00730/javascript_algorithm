//다시풀기
function solution(numbers) {
  var answer = [];
  numbers.forEach((number) => {
    let copyNum = number;
    let bit = "";
    while (number > 1) {
      bit = (number % 2) + bit;
      number = Math.floor(number / 2);
    }
    bit = number + bit;
    while (bit.length % 4 !== 0) {
      bit = "0" + bit;
    }
    bit = "0000" + bit;
    bit = bit.split("");
    if (copyNum % 2 === 0) {
      answer.push(copyNum + 1);
    } else {
      let last = bit.lastIndexOf("0");
      bit[last] = "1";
      bit[last + 1] = "0";
      answer.push(binaryTo10(bit));
    }
  });
  return answer;
}

function binaryTo10(bit) {
  let number = 0;
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === "1") number += Math.pow(2, bit.length - 1 - i);
  }
  return number;
}
