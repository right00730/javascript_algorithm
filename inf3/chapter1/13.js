function solution(str) {
  let answer = "";
  for (let char of str) {
    const charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      answer += String.fromCharCode(charCode + 32);
    } else {
      answer += String.fromCharCode(charCode - 32);
    }
  }
  return answer;
}

const result = solution("AbcdZ");
console.log(result);
