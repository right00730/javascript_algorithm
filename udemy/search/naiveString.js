function naiveString(longStr, str) {
  let count = 0;
  for (let i = 0; i < longStr.length - str.length + 1; i++) {
    for (let j = 0; j < str.length; j++) {
      if (longStr[i + j] !== str[j]) break;
      if (j === str.length - 1) count++;
    }
  }
  return count;
}
console.log("Result", naiveString("deeedbbcccbdbdaa", "db"));
