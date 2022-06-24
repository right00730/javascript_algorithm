class Graph {
  constructor() {
    this.adjacencylist = {};
  }
  addVertext(key) {
    if (!this.adjacencylist[key]) this.adjacencylist[key] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencylist[vertex1]) this.adjacencylist[vertex1] = [];
    if (!this.adjacencylist[vertex2]) this.adjacencylist[vertex2] = [];
    this.adjacencylist[vertex1].push(vertex2);
    this.adjacencylist[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencylist[vertex1] = this.adjacencylist[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencylist[vertex2] = this.adjacencylist[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertext(vertex) {
    if (!this.adjacencylist[vertex]) return;
    else {
      for (let vertex2 of this.adjacencylist[vertex]) {
        this.removeEdge(vertex, vertex2);
      }
      delete this.adjacencylist[vertex];
    }
  }
  breathSearch(start) {
    let result = [];
    let queue = [];
    let ch = {};
    queue.push(start);
    ch[start] = true;

    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current);
      for (let linked of this.adjacencylist[current]) {
        if (!ch[linked]) {
          ch[linked] = true;
          queue.push(linked);
        }
      }
    }
    return result;
  }
}
let g = new Graph();

g.addVertext("A");
g.addVertext("B");
g.addVertext("C");
g.addVertext("D");
g.addVertext("E");
g.addVertext("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

function solution1(graph) {
  let result = [];

  let ch = {};
  function DFS(key) {
    result.push(key);
    ch[key] = true;
    for (let i = 0; i < graph[key].length; i++) {
      let vertex = graph[key][i];
      if (!ch[vertex]) DFS(vertex);
    }
  }
  DFS("A");
  console.log(result);
  return result;
}
function solution2(graph) {
  let result = [];
  let stack = [];
  let ch = {};
  stack.push("A");
  ch["A"] = true;
  while (stack.length > 0) {
    let node = stack.pop();
    result.push(node);
    for (let linked of graph[node]) {
      if (!ch[linked]) {
        ch[linked] = true;
        stack.push(linked);
      }
    }
  }
  return result;
}
console.log(solution2(g.adjacencylist));
console.log(g.breathSearch("A"));
