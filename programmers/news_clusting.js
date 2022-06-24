function solution1(str1, str2) {
  //두 원소의 총갯수 P(A)  , P(B)를 구하고 교집합의 갯수를 구함
  //P(AUB) = PA -P(B) - P(A N B)
  //
  var answer = 0;
  //문자열 소문자화
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  //     2개씩 split ,단 두개 string이 모두 문자일때만, 각각을 빈도수로 object에 담음.

  let stack1 = [];
  let stack2 = [];
  let p_common = 0;
  let p_A = 0;
  let p_B = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    const char1 = str1[i];
    const char2 = str1[i + 1];
    const code1 = char1.charCodeAt();
    const code2 = char2.charCodeAt();
    if (96 < code1 && code1 < 123 && 96 < code2 && code2 < 123) {
      p_A++;
      stack1.push(char1 + char2);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const char1 = str2[i];
    const char2 = str2[i + 1];
    const code1 = char1.charCodeAt();
    const code2 = char2.charCodeAt();
    if (96 < code1 && code1 < 123 && 96 < code2 && code2 < 123) {
      p_B++;
      stack2.push(char1 + char2);
    }
  }
  //  합벼으로 풀어보기?
  let p_AB = p_A + p_B;
  console.log(p_A, p_B);
  if (p_A === 0 && p_B === 0) return 65536 * 1;
  let pt1 = 0;
  let pt2 = 0;
  stack1.sort((a, b) => a - b);
  stack2.sort((a, b) => a - b);

  while (pt1 < stack1.length && pt2 < stack2.length) {
    console.log(pt1, pt2);

    if (stack1[pt1] === stack2[pt2]) {
      p_common++;
      pt1++;
      pt2++;
    } else if (stack1[pt1] > stack1[pt2]) {
      pt2++;
    } else pt1++;
  }
  console.log(stack1.slice());
  console.log(stack2.slice());

  console.log(p_common);
  console.log(p_AB);
  answer = Math.floor((p_common / (p_AB - p_common)) * 65536);
  return answer;
}
console.log(solution1("FRANCE", "french"));
function solution2(str1, str2) {
  //두 원소의 총갯수 P(A)  , P(B)를 구하고 교집합의 갯수를 구함
  //P(AUB) = PA -P(B) - P(A N B)
  //
  var answer = 0;
  //문자열 소문자화
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  //     2개씩 split ,단 두개 string이 모두 문자일때만, 각각을 빈도수로 object에 담음.
  let board1 = {};
  let board2 = {};

  let p_A = 0;
  let p_B = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    const char1 = str1[i];
    const char2 = str1[i + 1];
    const code1 = char1.charCodeAt();
    const code2 = char2.charCodeAt();
    if (96 < code1 && code1 < 123 && 96 < code2 && code2 < 123) {
      p_A++;
      board1[char1 + char2] = (board1[char1 + char2] || 0) + 1;
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const char1 = str2[i];
    const char2 = str2[i + 1];
    const code1 = char1.charCodeAt();
    const code2 = char2.charCodeAt();
    if (96 < code1 && code1 < 123 && 96 < code2 && code2 < 123) {
      p_B++;
      board2[char1 + char2] = (board2[char1 + char2] || 0) + 1;
    }
  }
  //  합벼으로 풀어보기?
  let p_AB = p_A + p_B;
  if (p_A === 0 && p_B === 0) return 65536 * 1;
  let p_common = 0;
  for (let key of Object.keys(board2)) {
    if (board1[key]) {
      p_common += Math.min(board1[key], board2[key]);
    }
  }
  answer = Math.floor((p_common / (p_AB - p_common)) * 65536);
  return answer;
}
