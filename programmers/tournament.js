//예상 대진표
//level 2

//같은 라운드에서 다음 라운드에 진출할경우 Math.ceil(a(or b)/2)번이 됨을 이용.
//초기 풀이: 다음라운드로 넘어갈경우 2로 나누어주며, 같은 라운드인지 판별하기 위해 더 큰값이 1 더 크며 짝수일때 break;
function solution(n, a, b) {
  var answer = 0;

  while (a > 0) {
    answer++;

    if (a > b) {
      if (b + 1 === a && a % 2 === 0) break;
    } else {
      if (a + 1 === b && b % 2 === 0) break;
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}

//개선
//+1 & 짝수를 구할필요 없이 ceil값이 동일하면 같은 라운드임을 이용.
function solution(n, a, b) {
  var answer = 0;

  while (a > 0) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) break;
  }
  return answer;
}
