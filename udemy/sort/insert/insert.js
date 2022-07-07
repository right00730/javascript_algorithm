function insertionSort(arr, func) {
  if (!func)
    func = (a, b) => {
      return a - b;
    };
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (func(arr[j], current) > 0) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = current;
  }
  return arr;
}
