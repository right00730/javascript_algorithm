function solution1_8(day, values) {
  let answer;
  const car_last_nums = values.map((value) => value % 10);
  answer = car_last_nums.reduce((count, car_last_num) => {
    if (car_last_num === day) {
      count = count + 1;
    }
    return count;
  }, 0);

  return answer;
}
