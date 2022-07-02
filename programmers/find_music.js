// 방금 그곡 복습완료
//6.30;

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

// 풀이 2번
// replace시 정규식을 활용한다. 그런데 E#의경우는 바뀔경우 특정 케이스에서 오류가 발생해서 다시 원복해준다.
// date로 별도로 split 하는것 대신 해당 시간으로 Date 객체를 만들어 시간차를 구한다.
function solution(m, musicinfos) {
  var answer = "(None)";

  m = m.replace(/\w#/g, (a) => a[0].toLowerCase());
  m = m.replace(/e/g, "E#");

  let longTake = 0;

  const musics = musicinfos.map((music) => {
    return music.split(",");
  });
  musics.forEach((music) => {
    let names = music[3].replace(/[A-Z]#/g, (music) => music[0].toLowerCase());
    names = names.replace(/e/g, "E#");

    // 구한 시간차는 ms단위 이므로 /60000으로 다시 분처리가 필요하다.
    const time =
      (new Date(`1970-01-01 ${music[1]}:00`) -
        new Date(`1970-01-01 ${music[0]}:00`)) /
      60000;

    let realMusic = "";

    realMusic =
      names.repeat(Math.floor(time / names.length)) +
      names.slice(0, time % names.length);

    if (realMusic.includes(m)) {
      if (longTake < time) {
        longTake = time;
        answer = music[2];
      }
    }
  });

  return answer;
}
