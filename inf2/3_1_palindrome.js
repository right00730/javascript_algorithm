function solution(values) {
  const len = values.length;
  const content = values.toUpperCase();
  for (let i = 0; i < len / 2; i++) {
    if (content[i] !== content[len - i - 1]) {
      return "NO";
    }
  }
  return "YES";
}

let requestValue = "gooG";
console.log(solution(requestValue));
