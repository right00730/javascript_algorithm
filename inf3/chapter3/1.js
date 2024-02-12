function solution(s) {
  let answer = "YES";
  const str = s.toUpperCase();
  let lpt = 0;
  let rpt = s.length - 1;

  while (lpt <= rpt) {
    if (str[lpt] !== str[rpt]) {
      return "NO";
    }
    lpt++;
    rpt--;
  }

  return answer;
}

function solution2(s) {
  let answer = "YES";
  const str = s.toUpperCase();
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "NO";
    }
  }

  return answer;
}

let str = "godgoG";
console.log(solution(str));
