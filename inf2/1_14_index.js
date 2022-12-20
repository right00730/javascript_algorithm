function solution(value) {
  const mid = Math.floor(value.length / 2);
  if (value.length % 2 === 0) {
    return value.substring(mid - 1, mid + 1);
  }
  return value.substring(mid, mid + 1);
}
function solution(value) {
  const mid = Math.floor(value.length / 2);
  if (value.length % 2 === 0) {
    return value.slice(mid - 1, mid + 1);
  }
  return value.slice(mid, mid + 1);
}

let requestValue = "good";
console.log(solution(requestValue));
