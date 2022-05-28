// not easy , and pure recursive is hard?

let ss = {
  num: 1,
  test: [1],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(ss));

function stringifyNumbers(obj) {
  function DFS(obj) {
    let type = typeof obj;
    if (type !== "object" || Array.isArray(obj)) {
      if (type === "number") {
        obj = String(obj);
      } else if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          obj[i] = String(obj[i]);
        }
      }

      return obj;
    } else {
      //객체라면 다시 내부 객체를 호출한다.
      for (let key of Object.keys(obj)) {
        let newValue = DFS(obj[key]);
        obj[key] = newValue;
      }
      return obj;
    }
  }
  let newObj = Object.assign({}, obj);
  console.log(newObj === obj);
  return DFS(newObj);
}
/*




function stringifyNumbers(obj) {
  let newObj = {};

  //객체라면 다시 내부 객체를 호출한다.
  for (let key in obj) {
    let type = typeof obj[key];
    if (type === "number") {
      newObj[key] = String(obj[key]);
    } else if (type === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// let obj = {
//   num: 1,
//   test: [1],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// // 틀렸다고 나옴
// //Expected "1" to  be 1 ?
// function stringifyNumbers1(obj) {
//   let type = typeof obj;
//   if (type !== "object" || Array.isArray(obj)) {
//     if (type === "number") {
//       obj = obj.toString();
//     }
//     return obj;
//   } else {
//     //객체라면 다시 내부 객체를 호출한다.
//     for (let key of Object.keys(obj)) {
//       let newValue = stringifyNumbers1(obj[key]);
//       obj[key] = newValue;
//     }
//     return obj;
//   }
// }

// let f = {
//   num: "1",
//   test: [],
//   data: { val: "4", info: { isRight: true, random: "66" } },
// };

// /*
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
// */
// // hlper
// function collectStrings(obj) {
//   let answer = [];
//   function helper(obj) {
//     for (let key in obj) {
//       const type = typeof obj[key];
//       if (type === "string") {
//         answer.push(obj[key]);
//       } else if (type === "object") {
//         helper(obj[key]);
//       }
//     }
//   }
//   helper(obj);
//   return answer;
// }
// // pure
// function collectStrings(obj) {
//   let newTmp = [];
//   for (let key in obj) {
//     const type = typeof obj[key];
//     if (type === "string") {
//       newTmp = [obj[key]];
//     } else if (type === "object") {
//       newTmp = newTmp.concat(collectStrings(obj[key]));
//     }
//   }
//   return newTmp;
// }

// const obj2 = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };
