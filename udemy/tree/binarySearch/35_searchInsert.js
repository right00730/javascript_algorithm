var searchInsert = function (nums, target) {
  let answer = 0;
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log(mid);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
      answer = end;
      console.log("end");
    } else {
      start = mid + 1;
      answer = start;
      console.log("Start,,");
    }
  }
  answer = mid + 1;
  for (let i = mid + 1; i >= 0; i--) {
    if (target < nums[i - 1]) {
      answer = i - 1;
    } else {
      break;
    }
  }

  return answer;
};

var searchInsert = function (nums, target) {
  let answer = 0;
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  if (nums[mid] > target) {
    return mid;
  } else {
    return mid + 1;
  }
};
console.log(searchInsert([1, 3], 2));
