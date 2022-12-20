function solution(value) {
  const answer = [];

  for (let txt of value) {
    if (answer.indexOf(txt) === -1) {
      answer.push(txt);
    }
  }
  return answer;
}

function solution(value) {
  const set = new Set();

  for (let txt of value) {
    set.add(txt);
  }
  return Array.from(set);
}
function solution2(value) {
  const answer = value.filter((txt, i) => value.indexOf(txt) === i);

  return answer;
}

let requestValue = ["good", "time", "good", "time", "student"];
console.log(solution2(requestValue));
