function solution(arr1, arr2) {
  const mergeArr = arr1.concat(arr2);

  mergeArr.sort((a, b) => a - b);

  return mergeArr;
}

function solution2(arr1, arr2) {
  let pt1 = 0;
  let pt2 = 0;
  const sortedArr = [];

  while (pt1 < arr1.length && pt2 < arr2.length) {
    if (arr1[pt1] < arr2[pt2]) {
      sortedArr.push(arr1[pt1]);
      pt1++;
    } else {
      sortedArr.push(arr2[pt2]);
      pt2++;
    }
  }
  while (pt1 < arr1.length) {
    sortedArr.push(arr1[pt1]);
    pt1++;
  }
  while (pt2 < arr2.length) {
    sortedArr.push(arr2[pt2]);
    pt2++;
  }

  return sortedArr;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution2(a, b));
