function findLongestSubstring(str) {
  //str의 각 char의 마지막 위치를 저장할 board 선언
  let board = {};
  let largest = 0;
  let start = 0;
  //str의 요소를 하나 씩 순회하면서 마지막 등장위치 업데이트
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    //만약 이전에 등장한 요소가 다시 등장하면 이전 중복문자 등장위치에서 현재 index까지를 길이를 저장
    //만약 등장하지 않는 경우 이전 중복문자 등장위치는 계속 0으로 위치
    //longestsubstring
    if (board[char]) {
      start = Math.max(start, board[char]);
      console.log("cut when..", char, board[char]);
    }
    console.log(i, start, char);

    largest = Math.max(i - start + 1, largest);
    console.log("largest", largest);
    console.log("---------");

    board[char] = i + 1;
  }
  //저장된 길이중 가장 긴 길이를 반환
  console.log(largest);
  return largest;
}
// findLongestSubstring("rithmschool"); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("thecatinthehat"); // 8
// findLongestSubstring("thisishowwedoit"); // 6

// function findLongestSubstring(str) {
//   let board = {};
//   let longest = 0;
//   let start = 0;
//   //  처음에 문자열로 객체에 키로 답는다.
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log("char", char);
//     if (board[char]) {
//       start = Math.max(start, board[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     board[char] = i + 1;
//   }
// }
