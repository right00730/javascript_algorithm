function solution(str) {
  let count = 0;
  for (char of str) {
    let code = char.charCodeAt();
    if (code >= 65 && code <= 90) count++;
  }
  return count;
}
const result = solution("KoreaTimeGood");
console.log(result);
