function solution2(numbers, hand) {
  var answer = "";
  hand = hand === "right" ? "R" : "L";
  // input : press numbers , hand(LEFT or RIGHT)
  // output : press log
  let moveHand = ["M", "L", "M", "R", "L", "M", "R", "L", "M", "R"];

  let handStatus = { L: 10, R: 12 };
  for (let num of numbers) {
    let chand = moveHand[num];
    if (chand !== "M") {
      answer += chand;
      handStatus[chand] = num;
      continue;
    } else {
      if (num === 0) num = 11;

      let LhandNum = Math.abs(num - handStatus.L);
      let RhandNum = Math.abs(num - handStatus.R);
      // 거리가 3으로 나누어 떨어지면 같은 라인에 있는것. = 몫의 위치만큼
      // 거리가 3으로 나누어떨어지지않으면 몫의 갯수만큼 행 이동 + 나머지만큼 열 이동한것
      LhandNum = Math.floor(LhandNum / 3) + (LhandNum % 3);
      RhandNum = Math.floor(RhandNum / 3) + (RhandNum % 3);
      console.log(`L : ${LhandNum} , RhandNum: ${RhandNum}`);
      if (LhandNum === RhandNum) {
        chand = hand;
      } else if (LhandNum < RhandNum) chand = "L";
      else chand = "R";
      answer += chand;
      handStatus[chand] = num;
    }
  }
  //그중 하나가 아니면 마지막 기록된 왼손-오른손 중 idx가 더 가까운것
  // == 차감했을 때 절대값이 더 작은것

  return answer;
}

function solution(numbers, hand) {
  var answer = "";
  hand = hand === "right" ? "R" : "L";

  let moveHand = ["M", "L", "M", "R", "L", "M", "R", "L", "M", "R"];

  let left = 10;
  let right = 10;

  for (let num of numbers) {
    let chand = moveHand[num];
    if (chand !== "M") {
      answer += chand;
      if (chand === "L") left = num;
      else right = num;
      continue;
    } else {
      if (num === 0) num = 11;
      let LhandNum = Math.abs(num - left);
      let RhandNum = Math.abs(num - right);
      LhandNum = Math.floor(LhandNum / 3) + (LhandNum % 3);
      RhandNum = Math.floor(RhandNum / 3) + (RhandNum % 3);
      if (num === 8) {
        console.log(`L :${left} ${LhandNum} ,  R: ${right} ${RhandNum}`);
      }
      if (LhandNum === RhandNum) {
        chand = hand;
        if (hand === "R") right = num;
        else left = num;
      } else if (LhandNum < RhandNum) {
        chand = "L";
        left = num;
      } else {
        chand = "R";
        right = num;
      }
      answer += chand;
    }
  }
  //그중 하나가 아니면 마지막 기록된 왼손-오른손 중 idx가 더 가까운것
  // == 차감했을 때 절대값이 더 작은것

  return answer;
}
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
