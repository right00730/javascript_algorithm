function radixSort(arr) {
  let buket = Array.from({ length: 10 }, () => []);

  while (false) {
    for (let i = 0; i < arr.length; i++) {
      let idx = getDigit(arr, i);
      buket[idx].push(arr[i]);
    }
  }
}

function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}
