// Least Recently Used

function leastRecentlyUsed(size, tasks) {
  const memory = Array.from({ length: size }, () => 0);

  for (let i = 0; i < tasks.length; i++) {
    const target = tasks[i];
    const hitIdx = memory.findIndex((task) => target === task);
    if (hitIdx === -1) {
      for (let j = size - 1; j > 0; j--) {
        memory[j] = memory[j - 1];
      }
    } else {
      //hit
      for (let j = hitIdx; j > 0; j--) {
        memory[j] = memory[j - 1];
      }
    }
    memory[0] = target;
  }

  return memory.join(",");
}

console.log(leastRecentlyUsed(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
