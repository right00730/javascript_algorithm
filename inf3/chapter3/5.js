function solution(str) {
  let answer = [str[0]];
  let counter = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      counter++;
      continue;
    }
    if (str[i] !== str[i - 1]) {
      if (counter > 1) answer.push(counter);
      answer.push(str[i]);
      counter = 1;
    }
  }
  return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));
