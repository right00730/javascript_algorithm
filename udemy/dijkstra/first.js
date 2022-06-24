class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dixtra(start, end) {
    const PQ = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];
    for (let node in this.adjacencyList) {
      if (node === start) {
        distances[node] = 0;
        PQ.enqueue(node, 0);
      } else {
        distances[node] = Infinity;
        PQ.enqueue(node, Infinity);
      }
      previous[node] = null;
    }

    while (PQ.value.length > 0) {
      smallest = PQ.dequeue().node;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);

          smallest = previous[smallest];
        }
        path = path.concat(smallest).reverse().join(" ");
        return path;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighor in this.adjacencyList[smallest]) {
          const linkedNode = this.adjacencyList[smallest][neighor];
          const candidate = linkedNode.weight + distances[smallest];
          if (distances[linkedNode.node] > candidate) {
            distances[linkedNode.node] = candidate;
            previous[linkedNode.node] = smallest;
            PQ.enqueue(linkedNode.node, candidate);
          }

          console.log(">> ", smallest, linkedNode.node, candidate);
        }
      }
    }
    return distances;
  }
}
class PriorityQueue {
  constructor() {
    this.value = [];
  }
  enqueue(node, priority) {
    this.value.push({ node, priority });
    this.sort();
  }
  dequeue() {
    const out = this.value.shift();
    return out;
  }
  sort() {
    this.value.sort((a, b) => a.priority - b.priority);
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
console.log(graph.dixtra("A", "E"));
