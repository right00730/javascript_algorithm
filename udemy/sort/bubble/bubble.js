function bubbleSort(numbers, compartor) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof compartor !== "function") {
    compartor = (a, b) => {
      return a - b;
    };
  }

  let arr = numbers.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compartor(arr[j], arr[j + 1]) > 0) swap(arr, j, j + 1);
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

let res = bubbleSort([4, 20, 12, 10, 7, 9]);
console.log(res);
