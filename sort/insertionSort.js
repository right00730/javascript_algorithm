function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    for (j; j > 0; j--) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
    }
    arr[j] = temp;
  }
  return arr;
}
console.log(insertionSort([8, 4, 10, 9]));
// 4, 8, 10, 9
