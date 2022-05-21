function insertSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
    console.log(arr);
  }
  return arr;
}

console.log(insertSorted([3, 4, 5, 33, 1, 9]));
