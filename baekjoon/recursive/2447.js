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
  console.log(solution(Number(input)));
  process.exit();
});

// input 3의 거듭제곱
//????????
function solution(n) {
  //
  let answer = "";

  function stars(L) {
    if (L === 1) {
      return "*";
    } else {
      let starContent = stars(L / 3);
      let content = [];
      for (let star of starContent) {
        let tmp = "";
        for (let i = 0; i < 3; i++) {
          tmp += star;
        }
        console.log(content);
        content.push(tmp);
      }
      for (let star of starContent) {
        let tmp = "";
        tmp += star;
        for (let i = 0; i < L / 3; i++) {
          tmp += " ";
        }
        tmp += star;
        content.push(tmp);
      }
      for (let star of starContent) {
        let tmp = "";
        for (let i = 0; i < 3; i++) {
          tmp += star;
        }
        content.push(tmp);
      }
      console.log(content);
      return content;
    }
  }

  answer = stars(n).join("\n");
  return answer;
}
