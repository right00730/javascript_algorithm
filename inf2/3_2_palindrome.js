function solution(values) {
  const content = values.toUpperCase().replace(/[^A-Z]/g, "");
  if (content !== content.split("").reverse().join("")) {
    console.log(content.split("").reverse().join(""));
    return "NO";
  }
  return "YES";
}

let requestValue = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(requestValue));
