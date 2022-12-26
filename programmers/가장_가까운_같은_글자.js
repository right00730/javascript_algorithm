//풀이 1.
//O(n^2)
//for문을 순회하며  string 내 현재 index까지 검사하며 가까운 글자를 찾음
function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    const lastIndex = s.slice(0, i).lastIndexOf(s[i]);
    if (lastIndex === -1) {
      answer.push(lastIndex);
    } else {
      answer.push(i - lastIndex);
    }
  }
  return answer;
}

function solution(s) {
  var answer = [];
  let lookup = {};

  //O(n)
  //string을 한글자씩 순회하며, 객체에 해당 글자를 키값으로 객체에 index를 업데이트(저장)한다.
  // 만약 객체에 해당키값이 없다면 처음 등장한 값이므로 -1을 push
  // 만약 객체에 해당 키값이 있다면 마지막으로 등장한 해당글자의 index이므로 해당값을 push
  s.split("").map((char, i) => {
    const idx = lookup[char] !== undefined ? i - lookup[char] : -1;
    answer.push(idx);
    lookup[char] = i;
  });

  return answer;
}
