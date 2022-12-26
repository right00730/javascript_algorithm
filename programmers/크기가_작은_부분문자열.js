function solution(t, p) {
  const len = p.length;
  var answer = 0;

  for (let i = 0; i <= t.length - len; i++) {
    const char = t.slice(i, i + len);
    if (Number(char) <= Number(p)) {
      answer++;
    }
  }

  return answer;
}
