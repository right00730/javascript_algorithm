function solution(s) {
  //레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된
  /*exam 을 탐색하면서 (가 들어오면 stack에 쌓고 )가 들어오면 stack에서 제거.
     "()"가 들어오면 현재까지 쌓인 스택의 갯수만큼 count를 증가시킴.  
     또한 제거될 때도 count를 증가시킴
  */

  let signs = s.split("");
  let stack = [];

  let cnt = 0;
  while (signs.length) {
    let sign = signs.pop();
    //레이저
    if (sign === ")" && signs[signs.length - 1] === "(") {
      cnt += stack.length;
      signs.pop();
    } else if (sign === ")") {
      stack.push(")");
    } else {
      stack.pop();
      cnt++;
    }
  }
  return cnt;
}

function solution2(s) {
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      //레이저
      stack.pop();
      if (s[i - 1] === "(") {
        cnt += stack.length;
      } else {
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution2("()(((()())(())()))(())"));
