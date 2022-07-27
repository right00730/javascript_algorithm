//실패율
//level1
//category :

//다른 풀이참고 필요
function solution(N, stages) {
  var answer = [];
  //fail = 스테이지에 도달하였으나 클리어하지못한 유저 / 총 도달 유저

  //총 유저,
  let totalUser = stages.length;
  let stageInfo = Array.from({ length: N + 2 }, () => 0);
  let fails = [];
  for (let stage of stages) {
    stageInfo[stage]++;
  }

  stageInfo = stageInfo.slice(0, N + 1);
  for (let i = 1; i < stageInfo.length; i++) {
    fails.push([i, stageInfo[i] / totalUser]);
    totalUser -= stageInfo[i];
  }
  answer = fails
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    })
    .map((fail) => fail[0]);

  return answer;
}

//case 2
// stage를 구분할때 filter 사용 > O(n^2)
//코드는 더 깔끔하지면 2중루프로 성능하락
function solution(N, stages) {
  var answer = [];
  //fail = 스테이지에 도달하였으나 클리어하지못한 유저 / 총 도달 유저

  //총 유저,
  let totalUser = stages.length;
  let fails = [];

  for (let i = 1; i <= N; i++) {
    let remained = stages.filter((stage) => stage === i).length;
    fails.push([i, remained / totalUser]);
    totalUser -= remained;
  }

  answer = fails.sort((a, b) => b[1] - a[1]).map((fail) => fail[0]);

  return answer;
}
