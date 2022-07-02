//괄호 회전하기
//category : stack, loop
//0702
//난이도 : 하

function solution(s) {
  let str = s;
  var answer = 0;
  if (s.length % 2 !== 0) return 0;
  //     문자열을 밀었을 때 올바른 괄호 문자열인지 확인 ,
  //홀수면 무조건 fail
  for (let i = 0; i < s.length; i++) {
    if (finder(str)) answer++;
    str = str.slice(1) + s[i];
  }
  return answer;
}
const mapper = { "]": "[", ")": "(", "}": "{" };
function finder(s) {
  let stack = [s[0]];
  let curr = s[0];
  // 처음에 비교문에서 mppaer에서 찾는 방식으로 변경
  for (let i = 1; i < s.length; i++) {
    curr = s[i];
    if (curr === "[" || curr === "(" || curr === "{") {
      stack.push(curr);
    } else {
      let last = stack.pop();
      if (last !== mapper[curr]) return false;
    }
  }
  return stack.length === 0;
}
