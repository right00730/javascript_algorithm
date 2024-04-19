function solution(str) {
  const stack = [];
  let pt = 0;

  while (str.length > pt) {
    const char = str[pt];
    pt++;

    if (char === "(") {
      stack.push("(");
    } else if (char === ")" && stack.length) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(solution("(()()))"));
