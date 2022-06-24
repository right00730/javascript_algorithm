// 문제1
//1. 느리다- n에따라 , 즉 문자의 길이에 따라 시간이 달라짐
//2. 무작위성이적음
//3.string만 처리 가능
function hash1(key, len) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i].charCodeAt(0) - 96;
    total = (total + char) % len;
  }
  return total;
}

function hash(key, len) {
  let total = 0;
  let WIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i].charCodeAt(0) - 96;
    total = (total * WIRD_PRIME + char) % len;
  }
  return total;
}

console.log(hash("cyan", 10));
