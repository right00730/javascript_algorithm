function solution(jobs) {
  var answer = 0;
  let len = jobs.length;

  let jobsTemp = jobs;
  jobsTemp.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let lastTime = 0;
  let queue = [];

  while (jobsTemp.length || queue.length) {
    if (jobsTemp.length && lastTime >= jobsTemp[0][0]) {
      const target = jobsTemp.shift();
      queue.push(target);
      queue.sort((a, b) => a[1] - b[1]);
      continue;
    }

    if (queue.length) {
      const task = queue.shift();
      lastTime = lastTime + task[1];
      answer = answer + lastTime - task[0];
    } else {
      const task = jobsTemp.shift();
      lastTime = task[0] + task[1];
      answer = answer + task[1];
    }
  }

  answer = Math.floor(answer / len);
  return answer;
}
let arr = [
  [24, 10],
  [28, 39],
  [43, 20],
  [37, 5],
  [47, 22],
  [20, 47],
  [15, 34],
  [15, 2],
  [35, 43],
  [26, 1],
];
const solution2 = (jobs) => {
  let answer = 0,
    j = 0,
    time = 0;
  jobs.sort((a, b) => {
    return a[0] - b[0];
  });

  const priorityQueue = [];
  while (j < jobs.length || priorityQueue.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      priorityQueue.push(jobs[j++]);
      priorityQueue.sort((a, b) => {
        return a[1] - b[1];
      });
      continue;
    }
    if (priorityQueue.length !== 0) {
      time += priorityQueue[0][1];
      answer += time - priorityQueue[0][0];
      priorityQueue.shift();
    } else {
      time = jobs[j][0];
    }
    console.log(time);
  }
  return parseInt(answer / jobs.length);
};
console.log(solution(arr));
