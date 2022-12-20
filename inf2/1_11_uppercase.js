function solution(value) {
  let count = 0;
  for (let txt of value) {
    const code = txt.charCodeAt();
    if (code >= 65 && code <= 90) {
      count++;
    }
  }
  return count;
}

function solution2(value) {
  let count = 0;
  for (let txt of value) {
    const upper = txt.toUpperCase();
    if (txt === upper) {
      count++;
    }
  }
  return count;
}

let requestValue = "KoreaTimeGood";
console.log(solution2(requestValue));
