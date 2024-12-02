/* 버블정렬
- 인접한 두 요소를 비교하여 크기가 순서대로 정렬되지 않았으면 서로 교환(swap) 하며, 이를 반복해서 리스트를 정렬하는 방식. 두 요소중 큰 요소가 거품처럼 끝으로 떠오른다고 하여서 버블정렬
- TC : Θ(n2)
*/

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], arr[j + 1]);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
