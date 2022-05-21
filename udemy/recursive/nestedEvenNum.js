// 문제가안나와있음.
function nestedEvenSum(obj) {
  let count = 0;
  if (typeof obj !== "object") {
    return 0;
  }
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      console.log(obj[key]);
      count += obj[key];
    } else {
      count += nestedEvenSum(obj[key]);
    }
  }
  return count;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "f",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj2));
console.log(typeof true);
