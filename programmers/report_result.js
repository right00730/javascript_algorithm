// lebvel1 어렵진않음
// 다시풀면? 나쁘진않은데 시간남을때만

function solution(id_list, report, k) {
  var answer = [];
  //     input : 배열 [신고자 , 신고대상] , 정지 갯수
  //     ouput : 유저별 받는 메일 갯수

  //     각 유저별로 신고당한 경우를 담는다.
  let reported = {};
  let mailUsers = {};

  for (let users of report) {
    let [x, y] = users.split(" ");
    if (!reported[y]) reported[y] = [x];
    else {
      let flag = reported[y].some((user) => user === x);
      !flag && reported[y].push(x);
    }
  }
  // 각 유저객체별로 길이가 k이상이면 신고대상이므로 객체의 value에 담긴 대상들에게 메일을 보낸다
  //메일객체에 신고대상의 경우를 담는다
  for (let reportedUser of Object.keys(reported)) {
    if (reported[reportedUser].length >= k) {
      reported[reportedUser].forEach((user) => {
        mailUsers[user] = (mailUsers[user] || 0) + 1;
      });
    }
  }
  //배열과 매핑하여 숫자를 계싼한다

  for (let id of id_list) {
    if (mailUsers[id]) {
      answer.push(mailUsers[id]);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

function solution(id_list, report, k) {
  //     input : 배열 [신고자 , 신고대상] , 정지 갯수
  //     ouput : 유저별 받는 메일 갯수

  //     각 유저별로 신고당한 경우를 담는다.

  let reports = [...new Set(report)].map((users) => users.split(" "));
  let reported = {};
  let mailUsers = {};

  for (let [x, y] of reports) {
    if (!reported[y]) reported[y] = [x];
    else {
      reported[y].push(x);
    }
  }
  // 각 유저객체별로 길이가 k이상이면 신고대상이므로 객체의 value에 담긴 대상들에게 메일을 보낸다
  //메일객체에 신고대상의 경우를 담는다
  for (let reportedUser of Object.keys(reported)) {
    if (reported[reportedUser].length >= k) {
      reported[reportedUser].forEach((user) => {
        mailUsers[user] = (mailUsers[user] || 0) + 1;
      });
    }
  }
  //배열과 매핑하여 숫자를 계싼한다
  let answer = id_list.map((id) => mailUsers[id] || 0);

  return answer;
}
