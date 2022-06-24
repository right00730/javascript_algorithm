/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let lookup = {};
  let answer = [];
  for (let word of words) {
    lookup[word] = (lookup[word] || 0) + 1;
  }

  // 정렬시 다른 빈도수라면 내림차순, 같은 빈도수라면 오름차순 정렬해야한다
  // 같은 문자열로 시작하는 경우 charCodeAt이 같으므로 b>a 즉 대소비교로 처리한다.
  // return 값이 < 0이면 오름차순 정렬이므로 b > a ? -1 : 1 로 b가 크면 오름차순되도록 처리한다
  answer = Object.keys(lookup).sort((a, b) => {
    if (lookup[a] === lookup[b]) {
      if (a.charCodeAt() === b.charCodeAt()) return b > a ? -1 : 1;
      else return a.charCodeAt() - b.charCodeAt();
    } else {
      return lookup[b] - lookup[a];
    }
  });
  return answer.slice(0, k);
};
