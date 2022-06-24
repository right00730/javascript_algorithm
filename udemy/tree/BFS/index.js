class Node {
  constructor(val) {
    this.right = null;
    this.left = null;
    this.val = val;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.val === val) return unde;
        if (current.val > val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else current = current.right;
        }
      }
    }
  }
  search(val) {
    if (!this.root) {
      return false;
    } else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (current.val === val) return true;
        if (current.val > val) {
          current = current.left;
        } else if (current.val < val) {
          current = current.right;
        } else {
          found = true;
        }
      }
    }
    return found;
  }
}

let tree = new BinarySearch();

tree.root = new Node(99);
console.log(tree.insert(1));
console.log(tree.insert(2));
console.log(tree.insert(3));
console.log(tree.insert(4));
console.log(tree.insert(5));

function solution() {
  let node = tree.root;
  let queue = [];
  let answer = [];
  queue.push(node);
  while (queue.length !== 0) {
    node = queue.shift();
    answer.push(node.val);
    // 이진트리가 아니라면 모든자식에 대해 같은 작업을 처리하면된다
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return answer;
}

console.log(solution());
