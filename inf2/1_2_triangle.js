function solution(values) {
  let max = Math.max(...values);
  let sum = 0;
  const maxIdx = values.indexOf(max);

  for (let i = 0; i < values.length; i++) {
    if (i !== maxIdx) {
      sum += values[i];
    }
  }

  return sum > max ? "YES" : "NO";
}

let requestValue = [13, 33, 17];
console.log(solution(requestValue));

// 삼각형 세변의 길이의 조건 = 가장 긴변의 길이 < 다른 두변의 길이의 합
