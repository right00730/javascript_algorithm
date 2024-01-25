function solution1_6(values) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < values.length; i++) {
    if (min > values[i]) {
      min = values[i];
    }
  }
  return min;
}
