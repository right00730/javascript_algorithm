function linearSearchSolution(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(linearSearchSolution([1, 4, 5, 12, 23, 7], 12));
console.log(linearSearchSolution([1, 4, 5, 12, 23, 7], 122));
