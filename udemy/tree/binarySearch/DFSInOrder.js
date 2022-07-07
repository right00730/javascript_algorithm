// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     if (this.root === null) {
//       this.root = new Node(value);
//       return this;
//     } else {
//       var current = this.root;
//       while (true) {
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = new Node(value);
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = new Node(value);
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }
//   depthFirstSearchPreOrder() {
//     if (this.root === null) return null;
//     let list = [];
//     function DFS(current) {
//       list.push(current.value);
//       if (current.left) DFS(current.left);
//       if (current.right) DFS(current.right);
//     }
//     DFS(this.root);
//     return list;
//   }
//   depthFirstSearchInOrder() {
//     if (this.root === null) return null;
//     let list = [];
//     function DFS(current) {
//       if (current.left) DFS(current.left);
//       list.push(current.value);
//       if (current.right) DFS(current.right);
//     }
//     DFS(this.root);
//     return list;
//   }
//   depthFirstSearchPostOrder() {
//     if (this.root === null) return null;
//     let list = [];
//     function DFS(current) {
//       if (current.left) DFS(current.left);
//       if (current.right) DFS(current.right);
//       list.push(current.value);
//     }
//     DFS(this.root);
//     return list;
//   }
// }
// let binary = new BinarySearchTree();
// binary
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);

// let res = binary.depthFirstSearchInOrder();
// console.log(res);
var str = "For more information, see Chapter 3.4.5.1 see Chapter 3.4.5.2";
var re = /see (chapter \d+(\.\d)*)/i;
var found = re.test(str);

console.log(found);
