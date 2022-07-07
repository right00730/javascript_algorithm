function sortedFrequency(arr, k) {
  function finder(arr) {
    if (arr.length <= 1) {
      return arr[0] === k ? 1 : 0;
    } else {
      let len = Math.floor(arr.length / 2);
      let result1 = finder(arr.slice(0, len));
      let result2 = finder(arr.slice(len));
      return result1 + result2;
    }
  }
  let answer = finder(arr);
  //   최솟값을 찾고ㅡ 최솟값을 기준으로 배열을 ㅂ누리, 한쪽에서 찾음면 인덱스 반환

  return answer === 0 ? -1 : answer;
}
