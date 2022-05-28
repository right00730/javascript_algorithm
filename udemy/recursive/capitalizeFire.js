function capitalizeFirst(arr) {
  let answer = [];
  function DFS(arr) {
    let str = arr[0].split("");
    str[0] = str[0].toUpperCase();
    arr[0] = str.join("");
    if (arr.length === 1) {
      answer.push(arr[0]);
    } else {
      answer.push(arr[0]);
      DFS(arr.slice(1));
    }
  }
  DFS(arr);
  return answer;
}

// is Answer. not used helper - 복습 다시풀기
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  } else {
    let res = capitalizeWords(arr.slice(0, -1));
    let tmp =
      arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].substr(1);
    res.push(tmp);
    return res;
  }
}

console.log(capitalizeWords(["car", "taco", "banana"])); // ['Car','Taco','Banana']
