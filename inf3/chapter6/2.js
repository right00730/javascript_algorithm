function solution(str) {
  let pt = 0;
  let answer = "";
  let stack = [];

  while (str.length > pt) {
    const char = str[pt];
    if (char === ")") {
      while (stack.length) {
        const ele = stack.pop();
        if (ele === "(") {
          break;
        }
      }
    } else {
      stack.push(str[pt]);
    }
    pt++;
  }
  return stack;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
