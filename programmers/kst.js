//k번째 큰 수
//category :  sort
//level 1 ?
//
function solution(array, commands) {
  var answer = [];
  //   input : 숫자원소 , command [start,end,idx]
  commands.forEach((command) => {
    const [start, end, idx] = command;
    let newArr = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(newArr[idx - 1]);
  });
  return answer;
}
