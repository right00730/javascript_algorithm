//일반적으로 조합은 DFS이나  문제가 단순하므로
//SET을 사용하여 원소의 종류의 포켓몬의 갯수 중 더 작은값이 선택.
//만약 포켓몬을 아무리 많이 선택하더라도 종류의 최대갯수가 상한이며  종류가 아무리 많아도 선택할 수 있는 포켓몬이 상한이된다
function solution(nums) {
  var answer = 0;
  let set = new Set(nums);
  answer = Math.min(set.size, nums.length / 2);
  return answer;
}
