//여행 경로
//깊이우선탐색 사용
// level 3
//level에 비해 어렵지는 않음.
function solution(tickets) {
  var answer = [];
  // input : 항공권 정보 2차원배열 [[출발,도착],...] ,

  let used = Array.from({ length: tickets.length }, () => false);
  let visited = ["ICN"];
  function DFS(L, locale) {
    if (L === tickets.length) {
      if (answer.length === 0) answer = visited.slice();
      else if (answer.join("") > visited.join("")) {
        answer = visited.slice();
      }
    }
    // 모두 방문한 경우 알파벳을 비교
    //  현재 위치와 연결된 항공권의 모든 경우의 수를 stack에 쌓음
    // 더 이상 방문할 경우의수가 존재하지않으면 종료
    else
      for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === locale && !used[i]) {
          used[i] = true;
          visited.push(tickets[i][1]);

          DFS(L + 1, tickets[i][1]);

          used[i] = false;
          visited.pop();
        }
      }
  }

  // 시작점은 무조건 ICN
  DFS(0, "ICN");

  return answer;
}
