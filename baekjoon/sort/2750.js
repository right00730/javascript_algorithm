const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  console.log(insertSort(input.slice(1)));

  //   console.log(selectSort(input));
  process.exit();
});

function bubbleSort(arr) {
  let numbers = arr.slice(1);
  const n = arr[0];

  for (let i = 0; i < n - 1; i++) {
    let swapCh = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        swapCh = true;
        swap(numbers, j, j + 1);
      }
    }
    if (swapCh === false) break;
  }
  return numbers.join("\n");
}

function selectSort(arr) {
  let numbers = arr.slice(1);
  const n = arr[0];
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (numbers[j] < numbers[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      swap(numbers, i, minIdx);
    }
  }
  return numbers;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
      } else break;
    }

    arr[j + 1] = current;
  }
  return arr.join("\n");
}
