//단어 변경
//category : DFS
// level 2
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  var answer = 51;

  function dfs(curr, arr, d) {
    console.log(curr);
    if (arr.length === 0 || curr === target) {
      if (curr === target) answer = Math.min(answer, d);
      return;
    }
    let A = arr.filter((word) => diff(word, curr));
    let B = arr.filter((word) => !diff(word, curr));

    for (let i = 0; i < A.length; i++) {
      dfs(A[i], B.slice(), d + 1);
    }
  }
  dfs(begin, words, 0);
  return answer;
}

function diff(char1, char2) {
  let count = 0;
  for (let i = 0; i < char1.length; i++) {
    if (char1[i] !== char2[i]) count++;
    if (count > 1) return false;
  }
  return true;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
