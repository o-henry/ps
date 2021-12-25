function solution(a, b) {
  let answer = 0;
  let left = 0,
    right = 0;
  let temp = "";

  while (right < a.length) {
    temp += a[right];

    if (right === b.length - 1) {
      left++;
    }
  }

  console.log("temp", temp);

  if (isAnagram(temp, b)) {
    answer++;
  }

  return answer;
}

function isAnagram(str, target) {
  let answer = true;
  let map = new Map();

  for (let x of str) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }

  for (let y of target) {
    if (map.has(y)) map.set(y, map.get(y) - 1);
    else answer = false;
  }

  return answer;
}

let a = "bacaAacba"; // S 문자열
let b = "abc"; // T 문자열
console.log(solution(a, b));
