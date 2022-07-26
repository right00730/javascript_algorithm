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
