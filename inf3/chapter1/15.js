function solution2(str) {
  let mid = str.length / 2;
  let start = Math.ceil(mid - 1);
  let end = Math.floor(mid + 1);

  return str.slice(start, end);
}

function solution(str) {
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str.slice(mid - 1, mid + 1);
  } else {
    return str.slice(mid, mid + 1);
  }
}
console.log(solution("study"), solution("good"));
