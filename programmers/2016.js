//2016년
//level 1
function solution(a, b) {
  var answer = "";
  let dateList = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let days = +b;

  for (let i = 0; i < a; i++) {
    days += dateList[i];
  }

  let day = (days + 4) % 7;

  answer = dayList[day];

  return answer;
}

function solution(a, b) {
  var answer = "";
  let dateList = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let days = +b;

  for (let i = 0; i < a; i++) {
    days += dateList[i];
  }

  let day = (days + 4) % 7;

  answer = dayList[day];

  return answer;
}

// 다른사람 풀이를 참고한 Date객체를 참고한 풀이.> 일부케이스에서 시간이 조금 더 걸림.
function solution(a, b) {
  var answer = "";

  //Date 객체의 month는 0부터 시작하므로 기준 월에서 -1 처리;
  let date = new Date("2016", a - 1, b);

  answer = date.toString().slice(0, 3).toUpperCase();

  return answer;
}
