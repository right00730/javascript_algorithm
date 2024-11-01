function solution(str) {
  const stack = [];
  let operators = ["+", "-", "*", "/"];
  for (let i = 0; i < str.length; i++) {
    //or if(!isNaN(str[i]))
    if (!operators.includes(Number(str[i]))) {
      stack.push(str[i]);
      continue;
    }
    let num2 = stack.pop();
    let num1 = stack.pop();
    if (str[i] === "+") stack.push(num1 + num2);
    else if (str[i] === "-") stack.push(num1 - num2);
    else if (str[i] === "/") stack.push(num1 / num2);
    else if (str[i] === "*") stack.push(num1 * num2);
  }

  return stack[0];
}
console.log(solution("352+*9-"));
