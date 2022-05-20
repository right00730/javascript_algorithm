function solution(arr) {
  let answer = [];
  function DFS(arr) {
    if (!Array.isArray(arr)) {
      answer.push(arr);
      return;
    } else {
      const n = arr.length;
      for (let i = 0; i < n; i++) {
        DFS(arr[i]);
      }
    }
  }
  DFS(arr);
  return answer;
}
// is Answer - no helper
function solution(oldArr) {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < oldArr.length; i++) {
      newArr.concat(solution(arr[i]));
    }
  } else {
    newArr.push(oldArr);
  }
  return newArr;
}
console.log(solution([1, [2, [3, 4], [5]]]));
