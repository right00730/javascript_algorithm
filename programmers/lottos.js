//로또의 최고 순위와 최저 순위
//level 1

// solution 1. pointer를 활용하여 O(n+m)으로 풀이.
function solution(lottos, win_nums) {
  var answer = [];
  // input : 민우가 구매한 로또번호, 실제 당첨번호
  // output: 민우가 가능한 최고순위와 최저 순위 - 배열
  //순위표
  let lookup = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5 };
  //최저순위  : 0이 아닌 번호가 모두 틀리는 경우
  let minCounter = 0;
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);
  let zeroCounter = 0;
  let wt = 0;
  let lt = 0;
  //     pointer로 비교하며, 두 값이 일치하면 counter++ , 일치하지 않으면 더 작은값의 Pointer을 증가
  //      하나의 목록이라도 끝에 도달하면 종료.
  while (wt < win_nums.length && lt < lottos.length) {
    if (win_nums[wt] === lottos[lt]) {
      wt++;
      lt++;
      minCounter++;
    } else if (win_nums[wt] > lottos[lt]) {
      if (lottos[lt] === 0) zeroCounter++;
      lt++;
    } else {
      wt++;
    }
  }
  //최대 순위 : 0인 숫자를 맞춘 경우
  let high = lookup[minCounter + zeroCounter] || 6;
  let row = lookup[minCounter] || 6;

  return [high, row];
}
// solution 2. incldues를 활용하여 O(nM) 으로 풀이

function solution(lottos, win_nums) {
  var answer = [];
  // input : 민우가 구매한 로또번호, 실제 당첨번호
  // output: 민우가 가능한 최고순위와 최저 순위 - 배열
  //순위표
  let lookup = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5 };
  //최저순위  : 0이 아닌 번호가 모두 틀리는 경우
  let minCounter = 0;
  let zeroCounter = 0;

  for (let lotto of lottos) {
    let flag = win_nums.includes(lotto);
    if (flag) minCounter++;
    if (lotto === 0) zeroCounter++;
  }

  //최대 순위 : 0인 숫자를 맞춘 경우
  let high = lookup[minCounter + zeroCounter] || 6;
  let row = lookup[minCounter] || 6;

  return [high, row];
}
