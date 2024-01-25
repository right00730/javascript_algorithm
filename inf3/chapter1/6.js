function solution1_7(values) {
  let min = Number.MAX_SAFE_INTEGER;

  const sum = values.reduce((sum, value) => {
    if (value % 2 === 1) {
      min = Math.min(min, value);
      sum += value;
    }
    return sum;
  }, 0);

  return { min, sum };
}
