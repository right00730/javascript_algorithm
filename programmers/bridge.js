//징검다리
//level 4
//결정 알고리즘

function solution(distance, rocks, n) {
  var answer = 0;
  let rocksDistances = rocks.slice().sort((a, b) => a - b);
  //output :  각 지점 사이의 거리의 최솟값중 가장 큰값

  //최소거리 , 최대거리
  let lt = 0;
  let rt = distance;

  while (lt <= rt) {
    let midDistance = Math.floor((lt + rt) / 2);

    if (isPossible(midDistance, rocksDistances, n)) {
      lt = midDistance + 1;
      answer = Math.max(midDistance, answer);
    } else {
      rt = midDistance - 1;
    }
  }

  return answer;
}

function isPossible(distance, rocks, n) {
  let current = 0;
  for (let rock of rocks) {
    if (rock - current < distance) n--;
    else current = rock;

    if (n < 0) return false;
  }

  return true;
}
