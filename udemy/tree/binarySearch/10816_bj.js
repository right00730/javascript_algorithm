const fs = require("fs");
const input = fs.readFileSync("../example.txt").toString().trim().split("\n");

// 해결방법이 2가지. 1. 빈도수를 세거나 , 2.이진탐색으로 해결
//빈도수는 객체생성해서 count담기
//이진탐색은 우선 정렬 후, 해당 요소와 일치하는 최소index와 최대index를 구해서 빼준 후 +1을 하면 갯수 출력
/* 최댓값을 구할때 mid가 key와 일치하면 start지점이 mid로 고정되기때문에 
2개의 요소가 남아 있을때 Math.floor시 작은값을 참조하고 그 값이 key와 일치할 경우 start =mid가 유지되므로 
값을 계속 참조하여 무한루프가 발생한다 . 그러므로 Math.ceil을 사용한다

*/
function solution(input) {
  const n = input[0];
  const cards = input[1]
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => a - b);

  const nums = input[3].split(" ").map((x) => Number(x));

  let answer = "";
  for (let num of nums) {
    let up = upperCase(cards, num);
    if (up !== -1) {
      let down = lowerCase(cards, num);
      answer += up - down + 1;
    } else {
      answer += 0;
    }
    answer += " ";
  }
  return answer;
}

function lowerCase(arr, x) {
  let sp = 0;
  let ep = arr.length - 1;
  let mid = Math.floor((sp + ep) / 2);
  while (sp < ep) {
    mid = Math.floor((sp + ep) / 2);
    if (arr[mid] === x) {
      ep = mid;
    } else if (arr[mid] > x) {
      ep = mid - 1;
    } else {
      sp = mid + 1;
    }
  }

  if (arr[sp] === x) return sp;
  return -1;
}

function upperCase(arr, x) {
  let sp = 0;
  let ep = arr.length - 1;
  let mid = Math.ceil((sp + ep) / 2);
  while (sp < ep) {
    mid = Math.ceil((sp + ep) / 2);
    if (arr[mid] === x) {
      sp = mid;
    } else if (arr[mid] > x) {
      ep = mid - 1;
    } else {
      sp = mid + 1;
    }
  }

  if (arr[ep] === x) return ep;
  return -1;
}

console.log(solution(input));
