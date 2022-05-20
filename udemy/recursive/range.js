function recursiveRange(number) {
  if (number === 0) return 0;
  else {
    return number + recursiveRange(number - 1);
  }
}
