function solution(numbers, hand) {
  var answer = "";
  hand = hand === "right" ? "R" : "L";

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
      LhandNum = Math.floor(LhandNum / 3) + (LhandNum % 3);
      RhandNum = Math.floor(RhandNum / 3) + (RhandNum % 3);

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
