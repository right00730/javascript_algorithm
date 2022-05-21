const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});

let endMessages = "라고 답변하였지.";
function solution(n) {
  n = +n;
  let content = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";
  function DFS(L, line) {
    if (L === n) {
      content += line + '"재귀함수가 뭔가요?"' + "\n";
      content += line + '"재귀함수는 자기 자신을 호출하는 함수라네"' + "\n";
      content += line + endMessages + "\n";
      return;
    } else {
      for (let msg of startMessages) {
        content += line + msg + "\n";
      }
      DFS(L + 1, line + "____");

      if (L !== 0) content += line + endMessages + "\n";
      else content += line + endMessages;
    }
  }
  DFS(0, "");
  return content;
}

let startMessages = [
  '"재귀함수가 뭔가요?"',
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
  "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.",
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
];
