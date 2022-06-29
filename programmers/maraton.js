// 완주하지 못한 선수-1
// 6.30

// 객체를 사용한 방법
function solution(participant, completion) {
  var answer = "";

  //참여자 이름, 완주자이름
  //output: 완주못한 선수 이름

  let users = {};
  for (completionOne of completion) {
    users[completionOne] = (users[completionOne] || 0) + 1;
  }
  for (partipantOne of participant) {
    if (!users[partipantOne] || users[partipantOne] === 0) return partipantOne;
    users[partipantOne]--;
  }
  return answer;
}

// map을 사용한 방법
function solution(participant, completion) {
  var answer = "";

  //참여자 이름, 완주자이름
  //output: 완주못한 선수 이름
  let users = new Map();

  for (let i = 0; i < participant.length; i++) {
    const success = completion[i];
    const others = participant[i];
    users.set(others, (users.get(others) || 0) + 1);
    users.set(success, (users.get(success) || 0) - 1);
  }

  for (let [a, b] of users) {
    if (b > 0) return a;
  }

  return answer;
}

// 객체 vs Map?
/**
 * 공통점으로는 모두 키- 값의 구조이다.
 * 차이점
 * 1. Map은 요소의 순서를 기억한다. for of가 가능하다. forEach도 가능.
 *  =>순회를 하는 작업일 경우 Map을 사용하는 것이 좋음
 *2. 객체는 string, 맵은 모든 자료형의 키값을 가질 수 있다.
 3. 맵의 길이는 바로 구할 수 있다. 객체는 별도의 루프 필요
 
 그렇다면 Map과 객체 중 어떤것을 선택할 것인가?
정보를 추가, 제거할때는 Map, 정보에 접근할때는 객체가  더 좋다고 한다. 
또한  키를 알 수 없고 모든키가 동일한 타입이며 값들이 동일한 타입일 경우는 Map을 사용하고
각 요소에 대해 적용해야하는 로직이 있을 경우 객체를 사용해라.
 */
