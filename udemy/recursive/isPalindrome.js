// 회문찾기
// 복습 다시풀기
function isPalindrome(text) {
  let answer = false;
  function DFS(str) {
    if (str.length === 1) return str;
    else {
      return str[str.length - 1] + DFS(str.slice(0, str.length - 1));
    }
  }
  if (text === DFS(text)) answer = true;
  return answer;
}

function isAnswer(str) {
  console.log(str);
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) return isAnswer(str.slice(1, -1));
  return false;
}
console.log(isAnswer("awersome"));
console.log(isAnswer("foobar"));
console.log(isAnswer("tacocat"));
