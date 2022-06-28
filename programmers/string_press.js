//다시풀어보기 6.28 복습완료
//slice 기억하기 ,
// substr -> 이제 사용안됨
// subString -> slice와 유사. >0 일 경우 뒤에서부터 지정가능.

function solution(s) {
  var answer = "";
  let min = s.length;
  let len = Math.floor(s.length / 2);
  for (let i = 1; i <= len; i++) {
    let cnt = 1;
    let temp = "";
    let prev = s.slice(0, i);
    let j = i;
    for (j; j <= s.length; j += i) {
      let str = s.slice(j, j + i);
      if (prev === str) {
        cnt++;
      } else {
        if (cnt === 1) temp += prev;
        else temp = temp + cnt + prev;
        cnt = 1;
      }
      prev = str;
    }
    if (cnt === 1) temp += prev;
    else temp = temp + cnt + prev;

    min = Math.min(min, temp.length);
  }
  return min;
}
