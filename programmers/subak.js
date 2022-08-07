//수박수박수박수박수박수?
//level :1
function solution(n) {
  let char = "박수";
  var answer = "";

  for (let i = 1; i <= n; i++) {
    answer += char[i % 2];
  }
  return answer;
}
