//Use slice method
//TC : O(n * m log m)
//SC : O(n)
function solution(s, t) {
  let lt = 0;
  let rt = t.length;
  let cnt = 0;
  let txt = s.slice(lt, rt);

  while (rt <= s.length) {
    txt = s.slice(lt, rt);
    console.log(txt);
    if (isAnagram(txt, t)) cnt++;
    lt++;
    rt++;
  }

  return cnt;
}
function isAnagram(txt1, txt2) {
  txt1 = txt1
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  txt2 = txt2
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");

  return txt1 === txt2;
}

//Use Map
//TC: O(n * m)
//SC : O(n)
function solution2(s, t) {
  //save map 1,2
  const originMap = new Map();
  const sMap = new Map();

  for (let char of s.slice(0, 3)) {
    if (sMap.has(char)) {
      sMap.set(char, sMap.get(char) + 1);
    } else {
      sMap.set(char, 1);
    }
  }
  for (let char of t) {
    if (originMap.has(char)) {
      originMap.set(char, originMap.get(char) + 1);
    } else {
      originMap.set(char, 1);
    }
  }
  //while loop when rt reach at end
  let lt = 0;
  let rt = t.length - 1;
  let cnt = 0;

  while (rt < s.length) {
    if (compareMaps(sMap, originMap)) {
      console.log(`ping : `, sMap, originMap);
      cnt++;
    } else {
      console.log(`fail : `, sMap, originMap);
    }
    if (sMap.get(s[lt]) > 1) {
      sMap.set(s[lt], sMap.get(s[lt]) - 1);
    } else {
      sMap.delete(s[lt]);
    }

    lt++;
    rt++;
    if (sMap.has(s[rt])) {
      sMap.set(s[rt], sMap.get(s[rt]) + 1);
    } else {
      sMap.set(s[rt], 1);
    }
  }

  return cnt;
}

//add compareMap function
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== value) return false;
  }
  return true;
}

console.log(solution2("bacaAacba", "abc"));
