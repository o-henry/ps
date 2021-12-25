function mergeArray(a, b) {
  let answer = [];
  let pa = 0,
    pb = 0;

  let long = Math.max(a.length, b.length);

  while (pa < long && pb < long) {
    if (a[pa] <= b[pb]) {
      answer.push(a[pa++], b[pb++]);
    } else {
      answer.push(b[pb++]);
      pa++;
    }
  }

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(mergeArray(a, b));
