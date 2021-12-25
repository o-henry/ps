function solution(a, b) {
  let answer = [];
  let tmp;
  let pa = 0,
    pb = 0;

  while (pa < a.length && pb < b.length) {
    if (a[pa] < b[pb]) {
      answer.push(a[pa++]);
    } else {
      answer.push(b[pb++]);
    }
    tmp = b.slice(pb);
  }

  return [...answer, ...tmp];
}

let a = [1, 3, 3, 5, 7, 8];
let b = [2, 3, 6, 7, 9, 12, 13, 14];

console.log(solution(a, b));
