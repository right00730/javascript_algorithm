function merge(arr1, arr2, func) {
  console.log("start : ", arr1, arr2);

  if (typeof func !== "function") {
    func = (a, b) => a - b;
  }
  let newArr = [];
  let lt = 0;
  let rt = 0;

  console.log(arr1.length, arr2.length);

  while (lt < arr1.length && rt < arr2.length) {
    let result = func(arr1[lt], arr2[rt]);
    console.log(lt, rt);
    if (result > 0) {
      newArr.push(arr2[rt]);
      rt++;
    } else {
      newArr.push(arr1[lt]);
      lt++;
    }
  }

  while (lt < arr1.length) {
    newArr.push(arr1[lt]);
    lt++;
  }
  while (rt < arr2.length) {
    newArr.push(arr2[rt]);
    rt++;
  }
  console.log("end : ", newArr);

  return newArr;
}

function mergeSort(arr, func) {
  if (arr.length <= 1) return arr;
  else {
    let len = Math.floor(arr.length / 2);
    let A = mergeSort(arr.slice(0, len), func);
    let B = mergeSort(arr.slice(len), func);
    console.log("AG", A, B);
    return merge(A, B, func);
  }

  // add whatever parameters you deem necessary - good luck!
}

let arr = [4, 20, 12, 10, 7, 9];
const res = mergeSort(arr);
console.log(res);
