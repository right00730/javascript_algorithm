function solution(arrA, arrB) {
  arrA.sort(); //기본정렬이 오름차순 정렬
  arrB.sort();
  let apt = 0;
  let bpt = 0;
  const answer = [];

  while (apt < arrA.length && bpt < arrB.length) {
    if (arrA[apt] === arrB[bpt]) {
      answer.push(arrA[apt]);
      apt++;
      bpt++;
      continue;
    }

    if (arrA[apt] < arrB[bpt]) {
      apt++;
      continue;
    }
    bpt++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
