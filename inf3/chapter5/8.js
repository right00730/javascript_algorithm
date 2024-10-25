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

  for (let i = 0; i < t.length - 1; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  for (let char of t) {
    originMap.set(char, (originMap.get(char) || 0) + 1);
  }

  let left = 0;
  let cnt = 0;

  for (let right = t.length - 1; right < s.length; right++) {
    // Add the new character to the window
    sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);

    // Check if current window matches the targetMap
    if (compareMaps(sMap, originMap)) cnt++;

    // Remove the leftmost character from the window
    sMap.set(s[left], sMap.get(s[left]) - 1);
    if (sMap.get(s[left]) === 0) sMap.delete(s[left]);
    left++;
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
  console.log("hit!@");
  return true;
}

console.log(solution2("bacaAacba", "abc"));
