// this function work like indexOf
function binarySearch(arr, k) {
  let lp = 0;
  let rp = arr.length - 1;

  while (lp <= rp) {
    console.log(lp, rp);
    let mid = Math.floor((lp + rp) / 2);
    if (arr[mid] === k) return mid;
    else if (arr[mid] > k) rp = mid - 1;
    else lp = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
