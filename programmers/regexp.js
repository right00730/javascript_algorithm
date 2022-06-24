function solution1(new_id) {
  let change_id = new_id;
  var answer = "";
  //     소문자로 치환
  change_id = change_id.toLowerCase();
  // 특정조건 제외 전부 제거 =  []안에 ^ 사용하기, 특수문자도 []안에 들어가면 \처리 불필요
  let rules = /[^a-z0-9-_.]/g;
  change_id = change_id.replace(rules, "");

  // .가 두개면 한개로 치환  = .가 왔을때 2~99번 반복되는 경우 .로 replace
  change_id = change_id.replace(/\.{2,99}/g, ".");
  // 처음 . 제거 =  []밖 또는 []없이 ^가 있을때 해당 문자로 시작하는 경우를 의미. ^a => a로시작
  change_id = change_id.replace(/^[.]/, "");
  // 빈문자열일때 a넣기
  if (change_id === "") change_id = "a";
  // 길이가 16자 이상이면 처음부터 15개까지 슬라이스. 만약 마침표가 끝이면 그것도 제거
  change_id = change_id.slice(0, 14);
  // 끝에 . 제거 =  $를 붙이면  해당 문자로 끝나는 경우를 의미. a$ => a로 종료
  change_id = change_id.replace(/\.$/, "");

  // 길이가 2자 이하라면 마지막문자를 반복(최소길이 3)
  if (change_id.length <= 2) {
    change_id =
      change_id + change_id[change_id.length - 1].repeat(3 - change_id.length);
  }

  return change_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));

function solution(new_id) {
  let change_id = new_id;
  var answer = "";
  //     소문자로 치환
  change_id = change_id
    .toLowerCase()
    .replace(/[^\w\d-.]/g, "")
    .replace(/\.{2,99}/g, ".")
    .replace(/^[.]/, "")
    .replace(/^$/, "a") //^$ > 문자열이 공백임을 의미
    .slice(0, 14)
    .replace(/\.$/, "");

  if (change_id.length <= 2) {
    change_id =
      change_id + change_id[change_id.length - 1].repeat(3 - change_id.length);
  }

  return change_id;
}

console.log(solution("=^="));
