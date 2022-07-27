//괄호 변환
//level : 2

//처음 풀이.
function solution(p) {
  var answer = "";
  answer = changeToCorrect(p);
  return answer;
}

function changeToCorrect(char) {
  if (char === "") return "";
  let { u, v } = separate(char);
  if (isCorrect(u)) {
    let changeChar = changeToCorrect(v);
    return u + changeChar;
  } else {
    let newChar = "(";
    let changeChar = changeToCorrect(v);
    newChar = newChar + changeChar + ")" + reverse(u);
    return newChar;
  }
}
function isCorrect(char) {
  let stack = [];

  for (let i = 0; i < char.length; i++) {
    if (char[i] === "(") stack.push("(");
    else stack.pop();
  }
  return stack.length === 0;
}

function reverse(char) {
  char = char.slice(1, char.length - 1);
  let newChar = "";
  for (let ele of char) {
    if (ele === ")") newChar += "(";
    else newChar += ")";
  }
  return newChar;
}
function separate(char) {
  let u = char[0];
  let v = "";
  let flag = 1;
  for (let i = 1; i < char.length; i++) {
    if (u === char[i]) flag++;
    else flag--;

    if (flag === 0) {
      u = char.slice(0, i + 1);
      v = char.slice(i + 1);
      break;
    }
  }

  return { u, v };
}

//재풀이

function solution(p) {
  //1. empty string
  if (p === "") return "";

  //2. separate p
  let pt = 0;
  let flag = 0;
  do {
    flag += p[pt++] === ")" ? 1 : -1;
  } while (flag !== 0);
  let u = p.slice(0, pt);
  let v = p.slice(pt);

  //3. check is corrected
  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    //4. if u is not corrted...
    return "(" + solution(v) + ")" + reverse(u);
  }
}

//올바른괄호인지 확인할 경우 해당 괄호는 이미 최소의 균형잡힌 괄호이므로 처음과 마지막만 균형이 잡혀있기만 하면된다.
// 가장자리만 제외하고 올바르지 않을 수 없다.
//즉 ())(()와 같은 경우가 불가능. () 에서 이미 선종료됨
function isCorrect(char) {
  if (char[0] === "(" && char[char.length - 1] === ")") return true;
  return false;
}
//for대신 reduce를 활용. 성능은 유사.
function reverse(char) {
  return char
    .slice(1, char.length - 1)
    .split("")
    .reduce((red, ele) => {
      if (ele === "(") return (red += ")");
      else return (red += "(");
    }, "");
}
