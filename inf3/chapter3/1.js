function solution(edges) {
  var answer = [0, 0, 0, 0];
  const { vertex, edgeBoards } = findAddVertex(edges);
  const total = edgeBoards[vertex][1];
  answer[0] = vertex;
  for (let i = 1; i < edgeBoards.length; i++) {
    if (i === vertex) continue;
    if (edgeBoards[i][1] === 0) {
      answer[2]++;
    }
    if (edgeBoards[i][0] >= 2) {
      answer[3]++;
    }
  }
  answer[1] = total - answer[2] - answer[3];

  return answer;
}

const findAddVertex = (edges) => {
  const edgeBoards = [[0, 0]];

  for (let edge of edges) {
    const [o, i] = edge;
    if (!edgeBoards[i]) {
      edgeBoards[i] = [0, 0];
    }
    if (!edgeBoards[o]) {
      edgeBoards[o] = [0, 0];
    }
    edgeBoards[i][0]++;
    edgeBoards[o][1]++;
  }

  const vertex = edgeBoards.findIndex((edgeItem, i) => edgeItem[0] === 0 && edgeItem[1] > 1);

  for (let edge of edges) {
    const [o, i] = edge;
    if (String(o) === String(vertex)) {
      edgeBoards[i][0]--;
    }
  }

  return { vertex, edgeBoards };
};
