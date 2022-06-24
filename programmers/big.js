function solution(number, k) {
  let target = String(number);

  let stack = [];
  let deleteCount = 0;
  let pt = 0;
  while (deleteCount < k) {
    if (stack.length && target[pt] > stack[stack.length - 1]) {
      deleteCount++;
      stack.pop();
    } else {
      stack.push(target[pt]);
      pt++;
    }
  }
  for (let i = pt; i < target.length; i++) {
    stack.push(target[i]);
  }
  return stack.join("");
}

function solution(number, k) {
  let target = String(number);
  let stack = [];
  let deleteCount = k;
  let pt = 0;

  while (pt < target.length) {
    if (deleteCount && stack.length && target[pt] > stack[stack.length - 1]) {
      deleteCount--;
      stack.pop();
    } else {
      stack.push(target[pt++]);
    }
  }

  let len = target.length - k;
  let answer = stack.join("").slice(0, len);
  return answer;
}

// console.log(solution(987654321, 5));

function solutionOthers(number, k) {
  const answer = [];
  let head = 0;
  let del = k;

  answer.push(number[head++]);
  while (head < number.length) {
    if (del && answer[answer.length - 1] < number[head]) {
      answer.pop();
      del--;
      console.log(answer, number[head]);

      continue;
    }

    answer.push(number[head++]);
    console.log(head, answer.length);
  }
  return answer.slice(0, number.length - k).join("");
}
console.log(solution(String(111222), 3));
