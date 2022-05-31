// baejoon

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let stacks = {
  length: 0,
  bottom: -1,
  stack: [],
  push: function (val) {
    this.stack.push(val);
    this.length++;
  },
  top: function () {
    if (this.length === 0) return -1;
    return this.stack[this.length - 1];
  },
  pop: function () {
    if (this.length === 0) return -1;
    let top = this.stack.pop();
    this.length--;
    return top;
  },
  size: function () {
    return this.length;
  },
  empty: function () {
    return this.length === 0 ? 1 : 0;
  },
};

function solution(input) {
  input = input.slice(1);
  let res = "";
  for (let process of input) {
    let [method, val] = process.split(" ");

    if (method === "push") {
      callStack(method, Number(val));
    } else {
      res += callStack(method) + "\n";
    }
  }
  console.log(res);
}

function callStack(method, val) {
  switch (method) {
    case "push":
      return stacks.push(val);
    case "pop": {
      let popItem = stacks.pop();
      return popItem;
    }
    case "size": {
      let size = stacks.size();
      return size;
    }
    case "empty": {
      let empty = stacks.empty();
      return empty;
    }
    case "top": {
      let top = stacks.top();
      return top;
    }
    default:
      break;
  }
}

solution(input);
