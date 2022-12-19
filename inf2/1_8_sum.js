//방법1
function solution2(values) {
  const talls = values.split(" ");
  const tallSum = talls.reduce((total, tall) => (total += +tall), 0);

  for (let i = 0; i < talls.length; i++) {
    for (let j = i + 1; j < talls.length; j++) {
      if (tallSum - talls[i] - talls[j] === 100) {
        let sevens = talls.filter(
          (tall) => tall !== talls[i] && tall !== talls[j]
        );
        return sevens;
      }
    }
  }
}
//방법2. 1번과 나머지 2개를 제거하는 방법만 다름
function solution(values) {
  const talls = values.split(" ");
  const tallSum = talls.reduce((total, tall) => (total += +tall), 0);

  for (let i = 0; i < talls.length; i++) {
    for (let j = i + 1; j < talls.length; j++) {
      if (tallSum - talls[i] - talls[j] === 100) {
        talls.splice(j, 1); //i가 먼저 제거될시 j의 index위치가 바뀌므로 j먼저 제거한다.
        talls.splice(i, 1);
      }
    }
  }
  return talls;
}
let requestValue = "20 7 23 19 10 15 25 8 13";
console.log(solution2(requestValue));
