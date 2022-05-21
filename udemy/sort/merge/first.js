function mergedSort(arr) {
  console.log("arr>", arr);
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let a = mergedSort(arr.slice(0, mid));
    let b = mergedSort(arr.slice(mid));
    return merge(a, b);
  }
}

function merge(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
let arr = [3, 12, 4, 2, 98, 5];
console.log(mergedSort(arr));
console.log("te", arr.slice(0));
