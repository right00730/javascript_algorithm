function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const arrA = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const arrB = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return mergeAndSortHelper(arrA, arrB);
}

function mergeAndSortHelper(arrA, arrB) {
  let arr = [];

  console.log(arrA, arrB);
  let apt = 0;
  let bpt = 0;

  while (apt < arrA.length && bpt < arrB.length) {
    if (arrA[apt] <= arrB[bpt]) {
      arr.push(arrA[apt]);
      apt++;
    } else {
      arr.push(arrB[bpt]);
      bpt++;
    }
  }

  while (apt < arrA.length) {
    arr.push(arrA[apt]);
    apt++;
  }
  while (bpt < arrB.length) {
    arr.push(arrB[bpt]);
    bpt++;
  }
  return arr;
}

console.log(test);
const result = mergeSort([5, 2, 3, 1]);
console.log(result);
