function solution(relation) {
  var answer = [];
  let keySet = new Set();
  let len = relation[0].length;

  function dfs(keys, d) {
    if (uniqueCheck(keys, relation)) {
      keySet.add(keys);
    }
    if (d === len) {
      return;
    } else {
      dfs(keys + d, d + 1);
      dfs(keys, d + 1);
    }
  }
  dfs("", 0);

  let queue = [...keySet];

  queue.sort((a, b) => a.length - b.length);
  next: while (queue.length) {
    const key = queue.shift();
    for (let i = 0; i < answer.length; i++) {
      let flag = false;
      //   if (key.includes(answer[i])) continue next;
      inner: for (let char of answer[i]) {
        if (!key.includes(char)) {
          flag = true;
          break inner;
        }
      }
      if (!flag) continue next;
    }
    answer.push(key);
  }
  return answer.length;
}

function uniqueCheck(idxs, relation) {
  let set = new Set();

  for (let i = 0; i < relation.length; i++) {
    let str = "";
    for (let j = 0; j < idxs.length; j++) {
      str += relation[i][idxs[j]];
    }
    set.add(str);
  }
  if (relation.length === set.size) return true;
  return false;
}

let relation = [
  ["a", "1", "aaa", "c", "ng"],
  ["a", "1", "bbb", "e", "g"],
  ["c", "1", "aaa", "d", "ng"],
  ["d", "2", "bbb", "d", "ng"],
];

// [
//   ["a", "1", "aaa", "c", "ng"],
//   ["a", "1", "bbb", "e", "g"],
//   ["c", "1", "aaa", "d", "ng"],
//   ["d", "2", "bbb", "d", "ng"],
// ];
// [
//   ["100", "ryan", "music", "2"],
//   ["200", "apeach", "math", "2"],
//   ["300", "tube", "computer", "3"],
//   ["400", "con", "computer", "4"],
//   ["500", "muzi", "music", "3"],
//   ["600", "apeach", "music", "2"],
// ];

console.log(solution(relation));
