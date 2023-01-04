//이중 for문을 순회하며 values값들을 비교하고 더 큰값이 발견될때 한칸씩 뒤로이동
//O(n^3)? unshift가 중첩 for문내에 위치.
function solution(values) {
  let finder = [values[0]];
  //values를 순회하면서 비교하고 저장.
  outer: for (let i = 1; i < values.length; i++) {
    for (let j = 0; j < finder.length; j++) {
      if (finder[j] <= values[i]) {
        finder.unshift(values[i]);
        continue outer;
      }
    }
    finder.push(values[i]);
  }

  //finder에서 해당 value 인덱스를 출력
  for (let num of values) {
    console.log(finder.indexOf(num) + 1);
  }
}

//1. 빈 배열을 생성
//2. 이중 for문을 순회하며 대상 number값보다 큰 number 조건을 만족할때마다 number의 index를 기준으로 answer++

//O(n^2)
function solution(values) {
  let len = values.length;
  let answer = Array.from({ length: len }, () => 1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (values[i] < values[j]) {
        answer[i] = answer[i] + 1;
      }
    }
  }
  return answer;
}

let requestValue = [87, 89, 92, 100, 76];
console.log(solution(requestValue));
