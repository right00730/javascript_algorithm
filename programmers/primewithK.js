function solution(n, k) {
  var answer = 0;

  //   방법1 직접 계산해서 k진수 구하기
  //    let res =   changeNum(n,k)
  //     방법2 : str.toString(k) 로 진수 구하기 . 유의미하게 차이나지 않음.
  let res = n.toString(k);

  let stack = "";
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== "0") {
      stack += res[i];
    } else {
      if (isPrime(Number(stack))) answer++;
      stack = "";
    }
  }
  if (isPrime(Number(stack))) answer++;
  return answer;
}

// 진수 구하는 함수. 대상 10진수가 0이하일때까지 k로 나눈 후 그나머지를 차례대로 나열
function changeNum(n, k) {
  let nums = "";
  while (n > 0) {
    nums = (n % k) + nums;
    n = Math.floor(n / k);
  }
  return nums;
}

// 소수구하는 함수. root값까지 연산
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
