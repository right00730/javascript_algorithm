//약수의 갯수와 덧셈
//level : 1

//초기풀이. 일부 케이스에서 1초이상이 걸린다.
function solution(left, right) {
  var answer = 0;
  for (let num = left; num <= right; num++) {
    let count = 0;
    for (let i = 1; i < Math.sqrt(number); i++) {
      if (number % i === 0) count++;
    }
    count *= 2; // 해당 부분에서 count는 무조건 짝수가된다.
    if (number % Math.sqrt(number) === 0) count++; //제곱근값이 약수인지 여부에 따라 짝수,홀수 결정
    if (count % 2 === 0) answer += num;
    else answer -= num;
  }
  return answer;
}

//풀이 개선
//위 풀이에서 제곱근 제외한 약수의 갯수는 *2 하므로 무조건 짝수이며 결국 전체 약수의 홀수-짝수 여부는 제곱근이 약수인지에 따라 결정된다.
function solution(left, right) {
  var answer = 0;

  for (let num = left; num <= right; num++) {
    if (num % Math.sqrt(num) === 0) answer -= num;
    else answer += num;
  }

  return answer;
}
