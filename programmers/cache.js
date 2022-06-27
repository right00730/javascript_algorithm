// todo

// unshift - pop 말고 shift-push로 풀어보기

function solution(cacheSize, cities) {
  var answer = 0;
  //     input : 캐시크기, 도시이름
  // 캐시가 hit될때 실행시간은 1, miss일때 5
  //가장 최근에 찾은 캐시가 가장 앞으로 가며 즉 새로운 캐시가 추가되면 밀려남
  // 찾으려는 도시이름을 가장 앞으로 정렬 후 뒤에 하나를 제거한다. 만약 찾지못하면 +5, 찾으면 1
  //    1. 처음 cache 크기만큼 *5  +   배열 push
  let cache = [];
  let city = "";
  for (let i = 0; i < cities.length; i++) {
    city = cities[i].toLowerCase();
    const idx = cache.indexOf(city);
    // 다음요소를 뒤에서부터 탐색. 있으면 hit, 없으면 miss
    //hit
    if (idx !== -1) {
      answer += 1;
      for (let i = idx; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
      cache[0] = city;
      //miss
    } else {
      answer += 5;
      cache.unshift(city);

      // 마지막 cache 제거.
      if (cache.length > cacheSize) cache.pop();
    }
  }

  return answer;
}
