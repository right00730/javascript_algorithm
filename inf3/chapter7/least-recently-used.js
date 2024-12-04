// Least Recently Used

function leastRecentlyUsed(tasks) {
  const memory = Array.from({ length: 5 }, () => 0);

  for (let i = 0; i < tasks.length; i++) {
    const idx = memory.indexOf((cash) => cash === tasks[i]);
    if (idx === -1) {
      for (let j = 4; j >= 1; j--) {
        memory[j] = memory[j - 1];
      }
    } else {
      for (let j = idx; j >= 1; j--) {
        memory[j] = memory[j - 1];
      }
    }
    memory[0] = tasks[i];
  }

  return memory.join(",");
}

console.log(leastRecentlyUsed([1, 2, 3, 2, 6, 2, 3, 5, 7]));
