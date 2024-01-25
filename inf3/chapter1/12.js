function solution(str) {
  return str.toUpperCase();
}

function solution_2(str) {
  let answer = "";
  for (let char of str) {
    const charCode = char.charCodeAt();
    if (charCode >= 97 && charCode <= 122) {
      answer += String.fromCharCode(charCode - 32);
    } else {
      answer += char;
    }
  }
  return answer;
}
const result = solution_2("ItisTimeToStudy");
console.log(result);
