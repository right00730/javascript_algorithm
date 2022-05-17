// function areThereDuplicates(...args) {
//     let board ={}
//   for(let x of args){
//       board[x] =(board[x]  || 0) +1;
//   }
//      for(let value of Object.values(board)){
//          if(value>1) return true;

//   }
//   return false
// }
function areThereDuplicates(...args) {
  const n = args.length;
  args = args.sort((a, b) => {
    if (isNaN(a)) return a.charCodeAt() - b.charCodeAt();
    else return a - b;
  });
  console.log(args);
  let ln = 0;
  for (let rn = 1; rn < n; rn++) {
    if (args[ln] === args[rn]) return true;
    ln = rn;
  }
  return false;
}
