//가장 큰 수
//sort에 대해 정리 필요...

//시간복잡도 개선 필요
function solution(numbers) {
  var answer = "";
  numbers = numbers.map((a) => String(a));
  numbers.sort((a, b) => {
    let sumA = Number(a + b);
    let sumB = Number(b + a);

    if (sumA > sumB) return -1;
    else return 0;
  });

  let number = numbers.join("");
  if (Number(number) === 0) return "0";
  return number;
}
