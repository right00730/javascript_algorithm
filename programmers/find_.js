/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let answer = [];
  //     (  와 )의 갯수가 같으면 무조건 (
  // 갯수가 여유있으면 DFS둘다
  //
  function DFS(L, lc, rc, str) {
    if (lc === n && rc === n) {
      //   for (let i = rc; i < n; i++) {
      //     str += ")";
      //   }
      answer.push(str);
    } else {
      if (lc < n) DFS(L + 1, lc + 1, rc, `${str}(`);
      if (lc > rc) DFS(L + 1, lc, rc + 1, `${str})`);
    }
  }

  DFS(0, 0, 0, "");
  return answer;
};

console.log(generateParenthesis(3));
