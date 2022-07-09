//카펫
//
//초기풀이. 시간복잡도가 O(n^2)로 테스트 결과 매우 느리게 나옴.
function solution(brown, yellow) {
  var answer = [];
  //input : 갈색 격자의 수, 노란색 격자의 수
  //output : 카펫의 가로세로 크기

  // 테두리 : 갈색 1줄 , 내부 : 노란색 격자

  // 곱이  brown + yellow 이되는 모든 조합 중 조건을 만족하는 조합
  //조건, width, height 모두 3 이상  && width >= height
  //width-2 * height-2 === yellow
  let sum = brown + yellow;
  outer: for (let w = 3; w <= sum - 3; w++) {
    for (let h = 3; h <= sum - 3; h++) {
      if (w >= h && w * h === sum && (w - 2) * (h - 2) === yellow) {
        answer.push(w, h);
        break outer;
      }
    }
  }

  return answer;
}
//개선
function solution(brown, yellow) {
  var answer = [];

  let sum = brown + yellow;
  //height는 무조건 총 넓이/ width 이므로 이중for문 없이 별도로 계산이 가능
  // => O(n)으로 해결가능.
  for (let w = 3; w <= sum - 3; w++) {
    let h = sum / w;
    if ((w - 2) * (h - 2) === yellow && w >= h) {
      answer.push(w, h);
      break;
    }
  }
  return answer;
}
