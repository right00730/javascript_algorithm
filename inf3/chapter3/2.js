function solution(str) {
  let answer = "YES";
  let lowerStr = str
    .toLowerCase()
    .split("")
    .filter((char) => char.charCodeAt() >= 97 && char.charCodeAt() <= 122);
  let len = lowerStr.length;

  for (let i = 0; i <= Math.floor(len / 2); i++) {
    if (lowerStr[i] !== lowerStr[len - 1 - i]) {
      return "NO";
    }
  }

  return answer;
}

function solution2(str) {
  const lowerStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const reverseStr = lowerStr.split("").reverse().join("");

  return reverseStr === lowerStr ? "YES" : "NO";
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution2(str));
