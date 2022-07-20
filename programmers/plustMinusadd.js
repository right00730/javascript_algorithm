//음양더하기
//level1
//category: loop
function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
      continue;
    }
    answer -= absolutes[i];
  }
  return answer;
}
