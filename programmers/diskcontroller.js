function solution(jobs) {
  var answer = 0;
  //작업시간 = 실제 시작시간+ 소요 시간 - 요청 시작시간
  // 소요시간과 로딩시작시간은 고정이므로 실제 시작시간이 작을수록 유리 = 빨리끝나는것부터 선택

  // + 요청시작 시간을 고려해야함.
  jobs.sort((a, b) => a[1] + a[0] - (b[1] + b[0]));
  //   마지막 작업 종료시간 + 소요시간 + 실제 시작시간
  let lastEndTime = jobs[0][0];

  for (let job of jobs) {
    console.log("select target", job);

    console.log("start time", lastEndTime);
    answer += lastEndTime + job[1] - job[0];
    lastEndTime += job[1];
    console.log("current time", answer);
  }
  answer = Math.floor(answer / 3);
  return answer;
}

//3 + 3+6-2 + 9+ 9 -1
