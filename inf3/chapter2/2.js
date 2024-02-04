const solution = (students) => {
  let maxTall = 0;
  let answer = 0;

  for (let student of students) {
    if (student > maxTall) {
      answer++;
      maxTall = student;
    }
  }
  return answer;
};

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
