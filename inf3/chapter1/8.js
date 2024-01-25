function solution(members) {
  const totalTalls = members.reduce((totalTall, member) => totalTall + member, 0);
  const noneMemberTotal = totalTalls - 100;

  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      const memberA = members[i];
      const memberB = members[j];

      if (memberA + memberB === noneMemberTotal) {
        return members.filter((member) => member !== memberA && member !== memberB);
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
