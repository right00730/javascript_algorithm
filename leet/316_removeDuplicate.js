// 복습

// 중복 원소를 제거.
//stack 활용
// 원소를 순서대로 stack에 담아야하는데,만약 이전에 들어간 원소와의 조합을 고려해서 담는다.
// 즉, 중복된 원소가 나올때 고려하는게 아니라 처음 넣을때부터 오름차순-중복을 고려해야함

//올 수 있는 원소중 가장 작은 원소가 앞에 올 때 가장 작은값이된다.
var removeDuplicateLetters = function (s) {
  let stack = [];
  let pt = 0;
  let lookup = {};
  let add = {};

  for (let char of s) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  stack.push(s[pt]);
  add[s[pt]] = 1;
  lookup[s[pt]]--;
  pt++;
  while (pt < s.length) {
    let top = stack[stack.length - 1];
    while (stack.length && top > s[pt] && lookup[top] > 0 && !add[s[pt]]) {
      stack.pop();
      add[top]--;
      top = stack[stack.length - 1];
    }
    if (!add[s[pt]]) {
      stack.push(s[pt]);
      add[s[pt]] = 1;
    }
    lookup[s[pt]]--;
    pt++;
  }
  return stack.join("");
};
