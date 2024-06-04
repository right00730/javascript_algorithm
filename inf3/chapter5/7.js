function solution(str) {
  let answer = "";
  let arr = str.split("");
  let map = new Map();
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else map.set(arr[i], 1);
  }
  for (let [key, val] of map) {
    if (max < val) {
      answer = key;
      max = val;
    }
  }
  return answer;
}
const str = "BACBACCACCBDEDE";
console.log(solution(str));
