class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.bubbleDown(newNode);
    }
    return this;
  }
  bubbleDown(node) {
    let current = this.root;
    while (current) {
      if (current.value < node.value) {
        if (!current.right) {
          current.right = node;
          break;
        } else current = current.right;
        continue;
      } else {
        if (!current.left) {
          current.left = node;
          break;
        } else current = current.left;
      }
    }
  }
}
