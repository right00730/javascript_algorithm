function averagePair(arr, k) {
  //정렬된 배열 (숫자)와 타겟 평균이 주어진다.
  // 평균이 주어진 숫자 와 일치하는 숫자쌍이 있는지 찾아라...

  //   pointer를 설정한다. 맨뒤, 맨앞
  if (arr.length < 1) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // `긱 포인터 원소의 평균을 구하고 주어진값과 비교한다.
    const avg = (arr[left] + arr[right]) / 2;
    // 일치하면 종료
    //일치하지않으면, 주어진값보다 작으면 left를 증가시키고 크다면 right를 감소시킨다
    if (avg === k) return true;
    else if (avg > k) right--;
    else left++;
  }

  return false;
}

function isSubsequence(str1, str2) {
  // 문자열을 순서대로 탐색한다.
  // str1, str2가 각각 포인터로 가리킴
  //일치하면 rreturn true;
  //다르면 str2의 포인터만 이동. str2가 끝에 다다르면  종료 return false
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
  }
  if (i > str1.length - 1) return true;
  return false;
}

console.log(isSubsequence("hello", "helll"));
