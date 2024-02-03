function solution(str) {
  let finder = {};
  let answer1 = "";
  let answer2 = "";

  //Case 1. Use indexOf

  for (let i = 0; i < str.length; i++) {
    const idx = str.indexOf(str[i]);
    if (idx === i) {
      answer1 += str[i];
    }
  }

  //Case 2. Use Object
  for (let char of str) {
    if (!finder[char]) {
      answer2 += char;
      finder[char] = true;
    }
  }
  return answer1;
}
console.log(solution("ksekkset"), solution("good"));
