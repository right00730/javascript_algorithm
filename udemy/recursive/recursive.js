// easy

function solution(arr, func) {
  if (arr.length === 0) return false;
  else {
    let flag = func(arr.pop());
    return flag || solution(arr, func);
  }
}

const isOdd = (val) => val % 2 !== 0;

// isAnswer
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
console.log(([4, 6, 8, 9, 2], isOdd));
