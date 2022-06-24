/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
// 다른 정답 한번 찾아보기
// Runtime: 78 ms, faster than 62.32% of JavaScript online submissions for Print Binary Tree.
// Memory Usage: 43 MB, less than 13.04% of JavaScript online submissions for Print Binary Tree.

// rows = heght + 1
// colum = 2 ^ (heigh - 1)
// first row middle is rootnode ( middle = res[0][n-1/2])
// 각각의 노드 (r,c)는 자식 왼쪽 노드를 (r+1, c-2^heigt-r-1)에
// 오른쪽 자식노드를 r+1, c+2...에 위치시켜여한다.
// 모든 노드가 위치할때까지 반복해라
// 빈 배열은 ""로 채워라
var printTree = function (root) {
  // 1. height를 구해야한다.
  // 2.height를 이용해 res 배열을 생성. ""로 초기화
  // 3.재귀를 시작한다. 처음 위치는 인자로 지정, 자식노드는 문제대로 처리한다.
  let node = root;
  if (!root) return [];
  let height = -1;
  function getHeight(L, node) {
    if (node) height = Math.max(height, L);
    if (node.left) getHeight(L + 1, node.left);
    if (node.right) getHeight(L + 1, node.right);
  }
  getHeight(0, root);
  let row = height + 1;
  let column = Math.pow(2, row) - 1;

  let answer = Array.from({ length: row }, () =>
    Array.from({ length: column }, () => "")
  );

  function DFS(node, L, place) {
    answer[L][place] = String(node.val);
    let columL = place - Math.pow(2, height - L - 1);
    let columR = place + Math.pow(2, height - L - 1);

    if (node.left) DFS(node.left, L + 1, columL);
    if (node.right) DFS(node.right, L + 1, columR);
  }

  DFS(root, 0, Math.floor((column - 1) / 2));
  return answer;
};
