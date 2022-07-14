//숫자 문자열과 영단어
//level 1

//1차풀이
//object와 for of활용
function solution2(str) {
  var answer = "";
  let lookup = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let char = "";
  for (let txt of str) {
    if (!isNaN(txt)) {
      answer = answer + txt;
    } else {
      char += txt;
      if (lookup[char] || lookup[char] === 0) {
        answer += lookup[char];
        char = "";
      }
    }
  }
  answer = Number(answer);
  return answer;
}

//2차풀이 => 속도개선
//array와 for문 활용.
function solution(str) {
  var answer = str;
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numbers.length; i++) {
    let temp = answer.split(numbers[i]);
    answer = temp.join(i);
  }

  answer = Number(answer);
  return answer;
}
