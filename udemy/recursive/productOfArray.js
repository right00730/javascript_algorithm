// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
// easy

function productOfArray(arr) {
  let prd = 1;

  function DFS(arr) {
    if (arr.length === 0) return;
    else {
      prd *= arr.pop();
      DFS(arr);
    }
  }
  DFS(arr);
  return prd;
}
