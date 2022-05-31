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
console.log(tree.insert(90));

console.log(tree.search(2));
console.log(tree.insert(100));

console.log(tree.search(99));
console.log(Math.log10(20));
