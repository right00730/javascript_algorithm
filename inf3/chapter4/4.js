function solution(money, product) {
  let answer = 0;
  let len = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < len; i++) {
    const [salesP, deliveryP] = product[i];
    if (money - salesP - deliveryP >= 0) {
      money = money - salesP - deliveryP;
      answer++;
    } else {
      break;
    }
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(arr));
