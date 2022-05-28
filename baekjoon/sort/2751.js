const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  let res = quikSort(input.slice(1));
  res = res.join("\n");
  console.log(res);
  process.exit();
});

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let mid = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1, arr2);
  }
}

function merge(arr1, arr2) {
  let left = 0;
  let right = 0;
  let temp = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] > arr2[right]) {
      temp.push(arr2[right]);
      right++;
    } else {
      temp.push(arr1[left]);
      left++;
    }
  }
  while (left < arr1.length) {
    temp.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    temp.push(arr2[right]);
    right++;
  }
  return temp;
}

function quikSort(arr) {
  function helper(start, end) {
    console.log(start, end);
    let left = start;
    let right = end;
    if (left >= right) return;
    else {
      let mid = Math.floor(left + right / 2);
      const pivot = arr[mid];

      while (left <= right) {
        while (arr[left] < pivot) {
          left++;
        }
        while (arr[right] > pivot) {
          right--;
        }
        if (left < right) {
          swap(arr, right, left);
          left++;
          right--;
        }
        console.log(left, right);
      }

      helper(start, right);
      helper(left, end);
    }
  }
  helper(0, arr.length - 1);
  return arr;
}
function pivot(arr, start, end) {
  let mid = Math.floor(start + end / 2);
  const pivot = arr[mid];

  while (start <= end) {
    while (arr[start] < pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }

    if (end <= start) return end;

    swap(arr, end, start);
  }
  return end;
}
function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
