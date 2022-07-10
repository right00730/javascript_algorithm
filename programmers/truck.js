//다리를 지는 트럭
// 스택
// level2
//다시풀기

//풀이를 보고 중간에 jump하는 로직은 추가하니 특정케이스에서 과하게 나오던 시간감소.
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  //input : 다리의 길이, 버틸 수 있는 무게, 트럭들의 무게
  //모든 트럭이 건너는데 필요한 시간
  let queue = truck_weights.slice();
  let moved = [];
  let sumWeight = 0;
  let currentTime = 0;
  while (queue.length) {
    console.log(currentTime);
    currentTime++;

    if (moved.length && moved[0][1] === currentTime) {
      let [w, t] = moved.shift();
      sumWeight -= w;
    }

    if (moved.length < bridge_length && sumWeight + queue[0] <= weight) {
      sumWeight += queue[0];
      moved.push([queue.shift(), currentTime + bridge_length]);
    } else if (moved.length) {
      //현재 올라올 트럭이 없음 , 점프
      currentTime = moved[0][1] - 1;
    }
  }

  while (moved.length) {
    currentTime++;
    if (moved[0][1] === currentTime) {
      let [w, t] = moved.shift();
      sumWeight -= w;
    }
  }

  return currentTime;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
