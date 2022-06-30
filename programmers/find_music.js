// 방금 그곡
//6.30;

//꼭 다시풀기
//

// 문자열을 쪼개서 풀었는데 더 좋은 풀이를 찾아봐야할 것 같다.
function solution(m, musicinfos) {
  var answer = "(None)";

  m = m.replace(/C#/g, "c");
  m = m.replace(/D#/g, "d");
  m = m.replace(/F#/g, "f");
  m = m.replace(/G#/g, "g");
  m = m.replace(/A#/g, "a");
  let longTake = 0;
  const musics = musicinfos.map((music) => {
    music = music.replace(/C#/g, "c");
    music = music.replace(/D#/g, "d");
    music = music.replace(/F#/g, "f");
    music = music.replace(/G#/g, "g");
    music = music.replace(/A#/g, "a");
    return music.split(",");
  });

  musics.forEach((music) => {
    let names = music[3];

    let startT = music[0].split(":").map((t) => +t);
    let endT = music[1].split(":").map((t) => +t);
    let time = (endT[0] - startT[0]) * 60 + (endT[1] - startT[1]);
    let realMusic = "";

    for (let i = 0; i < Math.floor(time / names.length); i++) {
      realMusic += names;
    }
    realMusic = realMusic + names.slice(0, time % names.length);

    if (realMusic.includes(m)) {
      if (longTake < time) {
        longTake = time;
        answer = music[2];
      }
    }
  });

  return answer;
}
