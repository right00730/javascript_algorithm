function solution(clothes) {
  var answer = 0;
  let lookup = {};

  for (let [clothe, kind] of clothes) {
    if (!lookup[kind]) lookup[kind] = [];
    lookup[kind].push(clothe);
  }
  let total = 1;
  for (let kind of Object.keys(lookup)) {
    total *= lookup[kind].length + 1;
  }
  answer = total - 1;
  return answer;
}

const arr = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(arr));
