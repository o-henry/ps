function solution(a, b) {
  let answer = [];
  a.sort();
  b.sort();

  let pa = 0,
    pb = 0;

  // 1 2 3 5 9
  // 2 3 5 7 8

  while (pa < a.length && pb < b.length) {
    if (a[pa] === b[pb]) {
      answer.push(a[pa++]);
      pb++;
    } else if (a[pa] < b[pb]) {
      pa++;
    } else {
      pb++;
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
