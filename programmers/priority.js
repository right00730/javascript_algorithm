//input : 우선순위담긴 리스트. 원하는  target index
//output return timing
function solution(priorities, location) {
  var answer = 0;
  //1. insert queue
  //2. shift one
  //3. indexof all
  // if true target+10 into back
  //loop.. if find target indexofAll..
  let print = 0;
  let queue = [];
  let count = 0;
  for (let priority of priorities) {
    queue.push([priority, count]);
    count++;
  }

  while (queue.length > 0) {
    let doc = queue.shift();
    const flag = queue.findIndex((queue_doc) => queue_doc[0] > doc[0]);
    console.log(flag);
    if (flag !== -1) queue.push(doc);
    else {
      print++;
      if (doc[1] === location) return print;
    }
  }
  answer = print;
  return answer;
}
let arr = [1, 1, 9, 1, 1, 1];
console.log(solution(arr, 0));
