function solution(a, b) {
  let answer = "YES";
  let mapA = new Map();

  for (let x of a) {
    mapA.has(x) ? mapA.set(x, mapA.get(x) + 1) : mapA.set(x, 1);
  }

  for (let y of b) {
    if (mapA.has(y)) mapA.set(y, mapA.get(y) - 1);
    else answer = "NO";
  }

  return answer;
}

// let a = "AbaAeCe";
// let b = "baeeACA";

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
