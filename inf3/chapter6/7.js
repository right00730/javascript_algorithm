//Use indexOf method

function solution(order, subjects) {
  let lastIdx = 0;
  subjects = subjects.split("");
  for (let subj of order) {
    let idx = subjects.indexOf(subj);
    if (lastIdx > idx) {
      return "NO";
    }
  }
  return "YES";
}

//Use Queue Case
function solution2(order, subjects) {
  let queue = order.split("");

  for (let subject of subjects) {
    if (queue.includes(subject)) {
      const t = queue.shift();
      if (t !== subject) return "NO";
    }
  }
  if (queue.length) return "NO";

  return "YES";
}

console.log(solution2("CBA", "CBDAGE"));
