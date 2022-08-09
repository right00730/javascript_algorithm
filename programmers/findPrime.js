//소수찾기
//level 2

function solution(numbers) {
  var answer = 0;
  let used = Array.from({ length: numbers.length }, () => false);
  let set = new Set();

  function DFS(d, number) {
    if (d === numbers.length) {
      if (isPrime(+number)) set.add(+number);
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (!used[i]) {
          used[i] = true;
          DFS(d + 1, number + numbers[i]);
          used[i] = false;
        }
      }
      DFS(d + 1, number);
    }
  }
  DFS(0, "");
  return set.size;
}

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}
