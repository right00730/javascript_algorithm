// 숫자에 %10을 하면 1의자리가 반환된다.
//숫자를 /10 한 후 다시 %10을 하면 10자리가 반환된다
//...이러한 과정을 반복하면 모든 자리의 수를 구할 수 있다.

function solution(A, B) {
  let temp = B;
  for (let i = 0; i < 3; i++) {
    console.log(A * (temp % 10));
    temp = Math.floor(temp / 10);
  }
  console.log(A * B);
}
solution(472, 385);
