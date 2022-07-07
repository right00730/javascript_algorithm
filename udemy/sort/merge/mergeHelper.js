function merge(arr1, arr2, func) {
  if (typeof func !== "function") {
    func = (a, b) => a - b;
  }
  let newArr = [];
  let lt = 0;
  let rt = 0;

  while (lt < arr1.lnegth && rt < arr2.length) {
    let result = func(arr1[lt], arr2[rt]);
    console.log(lt, rt);
    if (result > 0) {
      newArr.push(arr2[rt]);
      rt++;
    } else {
      newArr.push(arr1[lt]);
      lt++;
    }
  }

  while (lt < arr1.length) {
    newArr.push(arr1[lt]);
    lt++;
  }
  while (rt < arr2.length) {
    newArr.push(arr2[rt]);
    rt++;
  }
  // add whatever parameters you deem necessary - good luck!
  return newArr;
}
let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];

let res = merge(arr1, arr2);
console.log(res);
