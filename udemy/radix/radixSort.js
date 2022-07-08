function getDigit(num, i) {
  // using this function may be helpful. good luck!
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // using this function may be helpful. good luck!
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
  // using this function may be helpful. good luck!
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    maxLength = Math.max(maxLength, digitCount(nums[i]));
  }
  return maxLength;
}

function radixSort(nums) {
  // good luck!
  let numbers = nums.slice();
  let budket = Array.from({ length: 10 }, () => []);
  let max = mostDigits(nums);
  for (let j = 0; j < max; j++) {
    budket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numbers.length; i++) {
      let idx = getDigit(numbers[i], j);
      budket[idx].push(numbers[i]);
    }
    numbers = getBudket(numbers, budket);
  }
  function getBudket(numbers, budket) {
    numbers = [];
    for (let i = 0; i < budket.length; i++) {
      numbers.push(...budket[i]);
    }
    return numbers;
  }
  return numbers;
}

let res = radixSort([8, 6, 1, 12]);
console.log(res);
