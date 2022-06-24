// 9개의 노래를 3개의 dvd에 담는데, 한 dvd에 담길 길이를 최소로해야한다
//9개의 곡을 3개로 나누는데 분할은 안된다. 각 dvd의 길이가 최소가 되도록 분배하라
//>
function musicVideo(n, m, songs) {
  //1곡의 최대길이가 10000
  let start = Math.min.apply(null, songs);
  let end = 10000 * n;
  let answer = end;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (counter(mid, songs) <= m) {
      console.log("?", mid);
      answer = Math.min(mid, answer);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

function counter(mid, songs) {
  let current = 0;
  let count = 1;
  for (let song of songs) {
    if (current + song <= mid) {
      current += song;
    } else {
      count++;
      current = song;
    }
  }
  console.log("mind", mid, "count ", count);
  return count;
}

let n = 9;
let m = 3;
let songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(musicVideo(n, m, songs));
