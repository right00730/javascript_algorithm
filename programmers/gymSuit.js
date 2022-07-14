//체육복
//level1
// category : greedy

//다른 풀이 구글링해보기

//데이터가 정렬이 안되어있음을 조심.
function solution(n, lost, reserve) {
  //체육복을 분실하지 않은 학생들.
  let have = reserve
    .filter((suit) => !lost.includes(suit))
    .sort((a, b) => a - b);
  let notHave = lost
    .filter((suit) => !reserve.includes(suit))
    .sort((a, b) => a - b);
  var answer = n - notHave.length;

  let haveone = have.pop();
  let lostone = notHave.pop();

  while (haveone && lostone) {
    if (lostone + 1 === haveone || lostone - 1 === haveone) {
      answer++;
      haveone = have.pop();
      lostone = notHave.pop();
      continue;
    } else if (haveone < lostone) {
      lostone = notHave.pop();
      continue;
    } else {
      haveone = have.pop();
      continue;
    }
    console.log(haveone, lostone);
  }

  return answer;
}
