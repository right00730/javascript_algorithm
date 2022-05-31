// answer 1
var countStudents1 = function (students, sandwiches) {
  for (let sandwiche of sandwiches) {
    let eatFLag = false;
    let n = students.length;
    for (let i = 0; i < n; i++) {
      let student = students.shift();
      if (student === sandwiche) {
        eatFLag = true;
        break;
      } else {
        students.push(student);
        continue;
      }
    }
    if (!eatFLag) return students.length;
  }
  return students.length;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log([1, 1, 0, 0].shift());

// answer2  runtime is same?
var countStudents = function (students, sandwiches) {
  while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
    let student = students[0];
    let sandwiche = sandwiches[0];
    if (sandwiche === student) {
      sandwiches.shift();
      students.shift();
    } else {
      students.push(students.shift());
    }
  }
  return students.length;
};
