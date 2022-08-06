//메뉴 리뉴얼
//다시풀기

//level 2

function solution(orders, course) {
  var answer = [];
  let orderd = {};
  for (let order of orders) {
    let target = order
      .split("")
      .sort((a, b) => a.charCodeAt() - b.charCodeAt());
    combination(0, target, "", orderd);
  }

  for (let i = 0; i < course.length; i++) {
    let max = 2;
    let maxCourse = [];
    for (let key of Object.keys(orderd)) {
      if (key.length === course[i] && orderd[key] >= max) {
        maxCourse = orderd[key] === max ? maxCourse.concat(key) : [key];
        max = orderd[key];
      }
    }
    answer = answer.concat(maxCourse).sort((a, b) => {
      if (b > a) return -1;
      else if (b < a) return 1;
      else return 0;
    });
  }
  return answer;
}

function combination(L, arr, str, ordered) {
  if (arr.length === L) {
    if (str.length > 1) {
      ordered[str] = (ordered[str] || 0) + 1;
      return ordered;
    }
  } else {
    combination(L + 1, arr, str + arr[L], ordered);
    combination(L + 1, arr, str, ordered);
  }
}
