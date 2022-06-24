function solution2(s) {
  // 튜플의 원소의 부분집합

  //input 중복 요소없는 요소들집합 n을 구하라. 단 순서가 중요
  var answer = [];
  let lookup = {};
  //s를 순회하며 {},가 아닌 숫자들를 찾으면 객체에 담음
  //빈도수로 정렬함, 가장 만흥ㄴ게 앞
  let temp = "";
  for (let char of s) {
    if (!isNaN(char)) {
      temp += char;
    } else if (temp !== "") {
      lookup[temp] = (lookup[temp] || 0) + 1;
      temp = "";
    }
  }
  for (let keys of Object.keys(lookup)) {
    answer[lookup[keys] - 1] = Number(keys);
  }

  answer = answer.reverse();
  return answer;
}

//방법 2. 객체에 빈도수를 담은 후 순회하면서 각 value에 맞는 인덱스에 key를 담음.
// => 각각 등장한 횟수 index에 담김 => slice , reverse 후 반환
function solution(s) {
  //input : 튜플목록 string
  //output: 튜플 원소 배열.
  let str = s;
  let obj = {};
  let answer = [];

  //  튜플 스트링에서 count를 셀 수 있게 split
  //   가장 앞, 뒤 {{ -}} 제거 , },{를 기준으로 split
  str.slice(2, str.length - 2);

  //방법 2. 객체에 빈도수를 담은 후 순회하면서 각 value에 맞는 인덱스에 key를 담음.
  // => 각각 등장한 횟수 index에 담김 => slice , reverse 후 반환
  let tempNums = "";
  for (let char of str) {
    if (!isNaN(char)) {
      tempNums += char;
    } else if (tempNums) {
      obj[tempNums] = (obj[tempNums] || 0) + 1;
      tempNums = "";
    }
  }
  for (let key of Object.keys(obj)) {
    answer[obj[key]] = Number(key);
  }
  return answer.slice(1).reverse();
}

//방법 3 문자열을 다시 split 하고 배열의 길이를 오름차순으로 정렬. set에 담음 반환

function solution(s) {
  //input : 튜플목록 string
  //output: 튜플 원소 배열.
  let str = s;

  //  튜플 스트링에서 count를 셀 수 있게 split
  //   가장 앞, 뒤 {{ -}} 제거 , },{를 기준으로 split
  str = str.slice(2, str.length - 2);

  //방법 3 문자열을 다시 split 하고 배열의 길이를 오름차순으로 정렬. set에 담음 반환
  let tempArr = str.split("},{").map((elements) => elements.split(","));

  tempArr.sort((arrA, arrB) => arrA.length - arrB.length);

  tempArr = tempArr.reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);

  let set = new Set(tempArr);

  let answer = Array.from(set);
  answer = answer.map((char) => Number(char));
  return answer;
}
function solution(s) {
  var answer = [];
  let temp = s.slice(2, -2).split("},{");
  temp = temp
    .map((ele) => ele.split(",").map((x) => Number(x)))
    .sort((nums1, nums2) => nums1.length - nums2.length);
  temp = temp.reduce((cont, ele) => cont.concat(ele), []);
  console.log(temp);
  const set = new Set();
  for (let x of temp) {
    set.add(x);
  }
  answer = Array.from(set);
  return answer;
}
