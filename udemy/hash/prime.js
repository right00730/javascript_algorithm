function getPrime(n) {
  let prime = [2];

  outer: for (let i = 3; i < n; i++) {
    if (i % 2 === 0) continue;
    else {
      for (let j = 0; j < prime.length; j++) {
        console.log(i, prime[j], i % prime[j]);
        if (i % prime[j] === 0) continue outer;
      }
      prime.push(i);
    }
  }
  return prime;
}

function isFrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("AB" > "AA");
