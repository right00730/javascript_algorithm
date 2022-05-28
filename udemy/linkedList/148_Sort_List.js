const { lstat } = require("fs");
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const sortList = function (head) {
  let counter = 0;
  function DFS(node) {
    if (node === null || node.next === null) {
      return node;
    } else {
      let [nodeA, nodeB] = partition(node);
      let me = merge(DFS(nodeA), DFS(nodeB));
      console.log(me);
      return me;
    }
  }

  let answer = DFS(head);
  return answer;
};

function partition(node) {
  let slow = node;
  let fast = node;
  // use fast & slow pointer to find the middle node so that
  // we can split the list into list[0 -> slow] & list[slow + 1 -> list.size]
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const left = node;
  const right = slow.next;
  slow.next = null;
  return [left, right];
}
function merge(nodeA, nodeB) {
  let head = new ListNode();
  console.log("left", nodeA);
  console.log("right", nodeB);
  let node = head;
  while (nodeA !== null && nodeB !== null) {
    if (nodeA.val < nodeB.val) {
      node.next = nodeA;
      nodeA = nodeA.next;
    } else {
      node.next = nodeB;
      nodeB = nodeB.next;
    }
    node = node.next;
  }

  while (nodeB !== null) {
    node.next = nodeB;
    nodeB = nodeB.next;
    node = node.next;
  }

  while (nodeA !== null) {
    node.next = nodeA;
    nodeA = nodeA.next;
    node = node.next;
  }

  return head.next;
}
let list = { val: 4 };
list.next = { val: 2 };
list.next.next = { val: 1 };
list.next.next.next = { val: 3, next: null };
console.log(sortList(list));
// partition(list);
