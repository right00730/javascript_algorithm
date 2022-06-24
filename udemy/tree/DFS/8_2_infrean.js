function binary(n) {
  let temp = [];
  function helper(num) {
    if (num <= 0) return;
    let last = num % 2;
    temp.push(last);
    helper(Math.floor(num / 2));
  }
  helper(n);
  let answer = temp.reverse().join("");
  console.log(answer);
}
binary(11);
