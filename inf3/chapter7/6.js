function solution(n, talls) {
  let find = [];
  //앞과 뒤 요소를 비교해, 앞요소가 뒤보다 큰 경우들을 찾는다.
  //현수가 더 앞에 있으므로 처음 해당하는 경우는 앞 번호 , 다음 요소는 짝꿍이므로 뒷 번호를 저장해준다.
  //저장 시 번호를 고려해 +1을 한다.
  for (let i = 0; i < n - 1; i++) {
    if (talls[i] > talls[i + 1]) {
      if (!find.length) find.push(i + 1);
      else find.push(i + 2);
    }
  }
  return find.join(",");
}

function solutio2(n, talls) {
  let find = [];
  const tallsCopy = talls.slice();
  tallsCopy.sort();

  for (let i = 0; i < n; i++) {
    if (tallsCopy[i] !== talls[i]) {
      find.push(i + 1);
    }
  }
  return find.join(",");
}
console.log(solution(9, [120, 125, 127, 160, 135, 135, 143, 152, 130]));
