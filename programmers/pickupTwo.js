//두개 뽑아서 더하기
//중복 add발생 해결필요..
//level 1

//DFS 활용
function solution(numbers) {
  var answer = [];
  let lookup = Array.from({ length: 110 }, () => false);

  function DFS(L, sum, count, visit) {
    if (L === numbers.length || count > 1) {
      if (count > 1) {
        lookup[sum] = true;
      }
      return;
    } else {
      DFS(L + 1, sum, count, visit);
      DFS(L + 1, sum + numbers[L], count + 1, visit + L);
    }
  }
  DFS(0, 0, 0, "");

  for (let i = 0; i < lookup.length; i++) {
    if (lookup[i]) {
      answer.push(i);
    }
  }
  return answer;
}

//for문 사용.
//속도적으로 더 빠르나 확장성은 dfs가 더 좋다.
function solution(numbers) {
  var answer = [];
  let lookup = Array.from({ length: 110 }, () => false);
  let set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  answer = [...set];
  answer.sort((a, b) => a - b);
  return answer;
}
