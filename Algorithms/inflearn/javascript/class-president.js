function solution(str) {
  let answer;
  let map = new Map();

  for (let s of str) {
    if (map.has(s)) map.set(s, map.get(s) + 1);
    else map.set(s, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
