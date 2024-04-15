function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const reverseNum = String(nums[i]).split("").reverse().join("");
    const isPrimeNum = isPrime(reverseNum);
    if (isPrimeNum) {
      answer.push(Number(reverseNum));
    }
  }
  return answer;
}

function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
