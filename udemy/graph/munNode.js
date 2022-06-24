// function solution(n, edge) {
// //     1에서 n까지 가는데 드는 edge가 제일 많은 노드
// // 노드들을 리스트에 담음
// // 재귀로 특정노드에 도달했을때 그 L이 가장 큰 경우
// //1에서 출발해서 깊이우선탐색으로 순회한다. 각 노드에 도착할때마다 도착한 최솟값을 기록한다.
// //최종 최솟값중 가장 큰 최대밗을 구하고 그 최댓값이랑 일치하는 갯수도 구한다
//     // let list = Array.from({length: n+1} ,()=>[] );
//     let list = Array.from({length: n+1} ,()=>Array.from({length: n+1} ,()=>0));

//     for(let ed of edge){
//         let row = ed[0];
//         let col = ed[1];

//         list[row][col]=1;
//         list[col][row]=1;

//        // if(!list[x[0]]) list[x[0]] = [];
//        //  if(!list[x[1]]) list[x[1]] = [];
//        //  list[x[0]].push(x[1]);
//        //  list[x[1]].push(x[0]);
//     }

//     var answer = 0;

//     let tempAnswer= Array.from({length: n+1} ,()=>0);
//     let ch = Array.from({length: n+1} ,()=>Array.from({length: n+1} ,()=>false));
//     function DFS(L, node){
//         if(tempAnswer[node] !==0)
//             tempAnswer[node] = Math.min(tempAnswer[node],L);
//         else tempAnswer[node]=L;

//         for(let i = 0; list[node].length ;i++){
//             if(list[node][i] ===1 && !ch[node][i] ){
//                ch[node][i] ===true;
//                ch[i][node] ===true;

//                 DFS(L+1, list[node][i]);
//             }
//         }
//     }
//     DFS(0,1)
//     const max = Math.max.apply(null, tempAnswer);
//    tempAnswer.forEach((count)=> {if(count ===max) answer++; })
//     return answer;
// }

// function solution(n, edge) {
//   //     1에서 n까지 가는데 드는 edge가 제일 많은 노드
//   // 노드들을 리스트에 담음
//   // 재귀로 특정노드에 도달했을때 그 L이 가장 큰 경우
//   //1에서 출발해서 깊이우선탐색으로 순회한다. 각 노드에 도착할때마다 도착한 최솟값을 기록한다.
//   //최종 최솟값중 가장 큰 최대밗을 구하고 그 최댓값이랑 일치하는 갯수도 구한다
//   // let list = Array.from({length: n+1} ,()=>[] );
//   let list = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: n + 1 }, () => 0)
//   );

//   for (let ed of edge) {
//     let row = ed[0];
//     let col = ed[1];
//     list[row][col] = 1;
//     list[col][row] = 1;
//   }

//   var answer = 0;
//   let queue = [];
//   let checked = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: n + 1 }, () => false)
//   );
//   queue.push(1);
//   let L = 1;
//   let tempArr = Array.from({ length: n + 1 }, () => 0);
//   while (queue.length) {
//     let node = queue.shift();
//     for (let i = 1; i <= n; i++) {
//       if (list[node][i] === 1 && checked[node][i] === false) {
//         console.log("current", node, i, L);

//         checked[node][i] = true;
//         checked[i][node] = true;
//         queue.push(i);
//         if (tempArr[i] !== 0) Math.min(tempArr[i], L);
//         else tempArr[i] = L;
//       }
//     }
//     L++;
//   }

//   console.log(tempArr);
//   const max = Math.max.apply(null, tempArr);
//   tempArr.forEach((count) => {
//     if (count === max) answer++;
//   });

//   return answer;
// }

function solution(n, edge) {
  let list = Array.from({ length: n + 1 }, () => []);

  for (let ed of edge) {
    let row = ed[0];
    let col = ed[1];
    list[row].push(col);
    list[col].push(row);
  }

  var answer = 0;
  let queue = [];
  let checked = Array.from({ length: n + 1 }, () => false);
  console.log(list);
  queue.push(1);
  let max = 0;
  let L = 1;
  checked[1] = true;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      for (let j = 0; j < list[node].length; j++) {
        const vertex = list[node][j];
        if (checked[vertex] === false) {
          checked[vertex] = true;
          queue.push(vertex);
          //   console.log("current ", node, vertex, L);
          if (L > max) {
            max = L;
            answer = 1;
          } else if (L === max) {
            answer++;
          }
        }
      }
    }
    L++;
  }

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
