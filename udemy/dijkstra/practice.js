class WeightedGraph {
  constructor() {
    this.graph = {};
  }
  addVertex(vertex) {
    this.graph[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.graph[vertex1].push({ vertex: vertex2, weight });
    this.graph[vertex2].push({ vertex: vertex1, weight });
  }
  Dijkstra(start, end) {
    const PQ = new PriorityQueue();
    const distances = {};
    const previous = {};
    for (let key of Object.keys(this.graph)) {
      if (key === start) {
        distances[key] = 0;
        PQ.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        PQ.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    // console.log("initial ", PQ.queue);
    // console.log("initial ", this.graph);
    // console.log("initial ", distances);
    let path = [];

    while (PQ.queue.length) {
      let { node, priority } = PQ.dequeue();
      const neighors = this.graph[node];

      if (node === end) {
        while (node) {
          path.push(node);
          node = previous[node];
        }
        break;
      }
      if (node || distances[node] !== Infinity) {
        for (let neighor of neighors) {
          const { vertex, weight } = neighor;

          let candidate = distances[node] + weight;
          if (candidate < distances[vertex]) {
            distances[vertex] = candidate;
            PQ.enqueue(vertex, candidate);
            previous[vertex] = node;
          }
          console.log(">> ", node, vertex, candidate);
        }
      }
    }
    return path.reverse().join("");
  }
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.sort();
  }
  dequeue() {
    let out = this.queue.shift();
    return out;
  }
  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const path = graph.Dijkstra("A", "E");
console.log(path);
