//멀쩡한 사각형
//level : 1

// 사각형의 대각선 지나는 단위 사각형 공식을 활용
function solution(w, h) {
  var answer = 1;
  //대각선을 지나는 사각형의 갯수 공식 = w + h - (w,h의 최대 공약수)
  let removedRec = w + h - isGcd(w, h);

  return w * h - removedRec;
}
function isGcd(a, b) {
  while (b > 0) {
    if (a % b === 0) return b;
    else {
      let temp = a % b;
      a = b;
      b = temp;
    }
  }
  return b;
}

//기울기를 활용.
//w,h를 좌우 반전하면 1차 그래프형태가 됨을 활용. w 1당 차지되는 총 넓이를 제외한 윗부분이 대각선 윗부분의 정사각형이 된다.
//대각선 하단의 정사각형들도 구해야하므로 최종적으로 * 2를 한다.
function solution(w, h) {
  var answer = 0;
  //대각선을 지나는 사각형의 갯수 공식 = w + h - (w,h의 최대 공약수)
  let slope = h / w;
  let underLine = 0;
  for (let i = 1; i <= w; i++) {
    underLine += Math.ceil(i * slope);
  }
  answer = (w * h - underLine) * 2;
  return answer;
}
