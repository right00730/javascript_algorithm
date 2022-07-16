//두개 뽑아서 더하기
//중복 add발생 해결필요..
//level 1
function solution(numbers) {
  var answer = [];
  let lookup = Array.from({ length: 110 }, () => false);

  function DFS(L, sum, count, visit) {
    if (L === numbers.length) {
      if (count > 1) {
        console.log(L, sum, count, visit);
        lookup[sum] = true;
      }
      return;
    } else {
      DFS(L + 1, sum, count, visit);
      for (let i = L; i < numbers.length; i++) {
        DFS(L + 1, sum + numbers[i], count + 1, visit + i);
        // if(sum+numbers[i] ===8)  console.log(L, sum+numbers[i], sum , count,visit)
      }
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
