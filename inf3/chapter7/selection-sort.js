/* 선택정렬
- 제자리 정렬 알고리즘의 하나로  주어진 배열 중에서 최솟값을 찾고 교체하는 과정을 반복한다.
- TC : Θ(n2)
*/

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    swap(arr, i, minIdx);
    // [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
