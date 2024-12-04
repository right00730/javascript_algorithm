/* 삽입정렬
- 각 요소들을 순회하며 현재 요소보다 앞 요소들을 순차적으로 비교하고 현재 요소보다 작은요소를 만났을 때 위치에 현재 요소를 삽입한다.
- TC : Θ(n2)
*/

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let ele = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > ele) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = ele;
  }
  return arr;
}

console.log(solution([11, 9, 7, 5, 6, 10, 9]));
