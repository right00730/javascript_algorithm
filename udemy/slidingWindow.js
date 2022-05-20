function maxSubarraySum(arr, k) {
  // add whatever parameters you deem necessary - good luck!
  //경계처리
  if (!arr || arr.length < k) return null;
  //   첫번째 창을 만든다.
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    max = Math.max(sum, max);
  }
  //해당 창의 합을 구한 후 max에 담아둔다.
  //배열 index를 하나 증가시키면서 새로운 원소값이 더해지면 가장 먼저들어온 원소값을 뺀다
  //다시 그 값과 기존 최대값을 비교한다.
  //i가 마지막 인덱스에 도달할때 까지 반복한다.

  return max;
}

function minSubArrayLen(arr, k) {
  //배열이 비어있다면 바로 0반환
  if (arr.length === 0) return 0;
  //첫번째 윈도우를 만든다. k값보다 크거나 같을때까지 윈도우를 더한다. 만약 끝가지 안되면 종료..
  let answer = 0;
  let len = 0;
  let sum = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= k) {
      len = i + 1;
      end = i;
      break;
    }
  }
  answer = len;
  console.log(`sum : ${sum}, len : ${len} , start : ${start} , end : ${end}`);
  //전체원소들을 순회한다.
  for (let i = len; i < arr.length; i++) {
    sum += arr[i];
    end++;
    len++;
    console.log(`sum : ${sum} ,len : ${len} , start : ${start} , end : ${end}`);

    while (sum > k) {
      sum -= arr[start++];
      len--;
      if (sum >= k) answer = Math.min(answer, len);
      console.log(
        `${answer} in .. sum : ${sum} ,len : ${len} , start : ${start} , end : ${end}`
      );
    }
  }
  return answer;
}

function findLongestSubstring(str) {
  let board = {};
  let longest = 0;
  let start = 0;
  //  처음에 문자열로 객체에 키로 답는다.
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (board[char]) {
      // console.log(start, board[char] + 1);
      start = Math.max(start, board[char]);
    }
    longest = Math.max(longest, i - start + 1);
    console.log(longest, i, start);

    //객체를 초기화하고, 중복된 그 키부터 다시 시작한다.
    board[char] = i + 1;
  }

  return longest;
}
console.log(findLongestSubstring("thecatinthehat"));
