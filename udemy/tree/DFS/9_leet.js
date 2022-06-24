/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let answer = "";

  function helper(arr) {
    if (arr.length === 1) answer += arr.pop();
    else {
      answer += arr.pop();
      helper(arr);
    }
  }
  helper(String(x).split(""));
  return x === Number(answer);
};
