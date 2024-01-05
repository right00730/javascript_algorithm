function solution1_2(a, b, c) {
    const maxValue = Math.max(a, b, c);
    const sum = a + b + c;
    return sum - maxValue > maxValue ? “YES” : “NO”;
  }
  