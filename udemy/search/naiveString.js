function myAnswer(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) break;
      if (j === shortStr.length - 1) count++;
    }
  }
  return count;
}
var removeDuplicates = function (s, k) {
  let stack = [];
  for (let char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      if (stack[stack.length - 1][1] === k - 1) {
        stack.pop();
      } else {
        let count = stack[stack.length - 1][1] + 1;
        stack[stack.length - 1][1] = count;
      }
    } else {
      stack.push([char, 1]);
    }
  }
  console.log(stack);
  let answer = "";
  for (let i = 0; i < stack.length; i++) {
    for (let j = 0; j < stack[i][1]; j++) {
      answer += stack[i][0];
    }
  }
  return answer;
};
console.log("Result", removeDuplicates("deeedbbcccbdaa", 3));
