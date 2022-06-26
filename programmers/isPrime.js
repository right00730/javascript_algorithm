// fail. 너무 오래걸림
function solution2(nums) {
  var answer = 0;
  let len = nums.length;

  function DFS(L, count, sum) {
    if (L === len) {
      if (count === 3 && isPrime(sum)) answer++;
    } else {
      DFS(L + 1, count + 1, sum + nums[L]);
      DFS(L + 1, count, sum);
    }
  }

  function isPrime(n) {
    console.log(n);
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  DFS(0, 0, 0);
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
let arr = [1, 2, 3, 4];
console.log(solution(arr));
function solution(nums) {
  var answer = 0;
  let len = nums.lnegth;
  let cases = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {}
  }

  return answer;
}

// 풀이 2  dp 사용=> success 시간 감소.
function solution(nums) {
  var answer = 0;
  let len = nums.length;
  let dp = Array.from({ lenth: 3000 }, () => false);

  function DFS(L, count, sum) {
    if (count === 3) {
      if (dp[sum]) answer++;
      else {
        if (isPrime(sum)) {
          answer++;
          dp[sum] = true;
        }
      }
      return;
    }
    if (L === len) {
      return;
    } else {
      DFS(L + 1, count + 1, sum + nums[L]);
      DFS(L + 1, count, sum);
    }
  }

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  DFS(0, 0, 0);

  return answer;
}

// for문 사용. 숫자 갯수가 증가할수록 중첩for문을 증가시켜주어야므로 재귀가 더효율적?
function solution(nums) {
  var answer = 0;
  let len = nums.length;
  let dp = Array.from({ lenth: 3000 }, () => false);

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] !== nums[j] && nums[j] !== nums[k]) {
          let sum = nums[i] + nums[j] + nums[k];
          if (dp[sum]) {
            answer++;
          } else if (isPrime(sum)) {
            answer++;
            dp[sum] = true;
          }
        }
      }
    }
  }

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return answer;
}
