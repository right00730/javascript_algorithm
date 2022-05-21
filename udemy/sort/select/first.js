function solution(arr) {
  let min = 0;

  //  배열을 순회하면서 최솟값보다 작은요소가 있다면 그값을 최솟값에 할당한다.
  for (let i = 0; i < arr.length; i++) {
    min = i;
    console.log(min);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }

  return arr;
  //한번 순회가 끝나면 최솟값과 초기값이 다를경우 값을 교환한다.
}
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}
console.log(solution([1, 26, 4, 32, 2]));
