// 모듈러 연산
// dp시 사용되는 경우가 있으므로 잘 기억해두기
function solution(A, B, C) {
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}
solution(...nums);
