const solution = (inputs) => {
  if (!inputs.length) {
    return;
  }
  const answer = [inputs[0]];

  for (let i = 1; i < inputs.length; i++) {
    if (inputs[i] > inputs[i - 1]) {
      answer.push(inputs[i]);
    }
  }
  return answer;
};

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
