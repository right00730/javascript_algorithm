//우선순위 큐
//level 3
//초기 퓰이
function solution(operations) {
  var answer = [];
  let queue = [];

  for (let i = 0; i < operations.length; i++) {
    let operator = operations[i];
    if (operator[0] === "I") queue.push(+operator.slice(1));
    else if (operator === "D 1") {
      queue.shift();
    } else {
      queue.pop();
    }
    queue.sort((a, b) => b - a);
  }

  if (queue.length) {
    answer.push(queue[0]);
    answer.push(queue[queue.length - 1]);
  } else {
    answer.push(0, 0);
  }
  return answer;
}
