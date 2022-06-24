// 합병정렬를 이용한 한글자씩 검증하는 로직 .

function solution(files) {
  var answer = [];

  answer = partiotion(files);

  return answer;
}

function partiotion(arr) {
  if (arr.length <= 1) return arr;
  else {
    const len = Math.floor(arr.length / 2);
    let A = partiotion(arr.slice(0, len));
    let B = partiotion(arr.slice(len));
    return merge(A, B);
  }
}

function merge(arr1, arr2) {
  let lp = 0;
  let rp = 0;
  let arr = [];

  while (lp < arr1.length && rp < arr2.length) {
    // compare(a,b) a<=B일때 true
    const compared = compareAB(arr1[lp], arr2[rp]);
    console.log(compared);
    if (compared) {
      arr.push(arr1[lp]);

      lp++;
    } else if (!compared) {
      arr.push(arr2[rp]);
      rp++;
    }
  }
  while (lp < arr1.length) {
    arr.push(arr1[lp]);

    lp++;
  }
  while (rp < arr2.length) {
    arr.push(arr2[rp]);

    rp++;
  }
  return arr;
}

function compareAB(x, y) {
  console.log("x,y", x, y);
  x = x.toLowerCase().split("");
  y = y.toLowerCase().split("");

  let xIdx = x.findIndex((char) => /\d/.test(char));
  let yIdx = y.findIndex((char) => /\d/.test(char));
  const xHead = x.slice(0, xIdx).join("");
  const yHead = y.slice(0, yIdx).join("");

  if (xHead > yHead) return false;
  else if (xHead < yHead) return true;

  let xNumber = "";
  let yNumber = "";
  for (let char of x.slice(xIdx)) {
    if (/\d/.test(char)) xNumber += char;
    else break;
  }
  for (let char of y.slice(yIdx)) {
    if (/\d/.test(char)) yNumber += char;
    else break;
  }
  console.log(Number(xNumber));
  if (Number(xNumber) > Number(yNumber)) return false;
  else return true;
}

// 개선된 버전 . 위에 로직보다 10ms정도 성능개선
function solution(files) {
  var answer = [];
  let filesObj = files.map((file, i) => {
    return { value: file, index: i };
  });

  filesObj.sort((a, b) => {
    //  return -1  :  a < b => ab
    // return 1   :   a > b = > ba
    const result = compareAB(a.value, b.value);
    if (result === 0) return a.index - b.index;
    else return result;
  });
  answer = filesObj.map((file) => file.value);
  return answer;
}

function compareAB(a, b) {
  //     b>a return -1 , a > b return 1 , a ==b return 0
  a = a.toLowerCase();
  b = b.toLowerCase();

  a = a.match(/(\D*)(\d*)/);
  b = b.match(/(\D*)(\d*)/);
  // a.localeCompare(b) if a>b :양수, b>a :음수 a===b :0
  const compareHead = a[1].localeCompare(b[1]);
  // compareHead가 동일하면 숫자를 비교 아
  return compareHead === 0 ? Number(a[2]) - Number(b[2]) : compareHead;
}
