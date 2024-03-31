function solution(length, nums) {
  let max = 0;
  let num = 0;

  for (let i = 0; i < length; i++) {
    let temp = nums[i];
    let sum = 0;
    while (temp) {
      sum = sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max || (sum === max && nums[i] > num)) {
      num = nums[i];
      max = sum;
    }
  }
  return num;
}

function solution2(length, nums) {
  let max = 0;
  let num = 0;

  for (let i = 0; i < length; i++) {
    let sum = String(nums[i])
      .split("")
      .reduce((t, v) => t + Number(v), 0);
    if (sum > max || (sum === max && nums[i] > num)) {
      num = nums[i];
      max = sum;
    }
  }
  return num;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
