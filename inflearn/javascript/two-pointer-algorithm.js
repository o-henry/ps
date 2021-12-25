function twoPointer(a, b) {
  let answer = [];
  a.sort();
  b.sort();
  let pa = 0,
    pb = 0;

  while (pa < a.length && pb < b.length) {
    if (a[pa] === b[pb]) {
      answer.push(a[pa++]);
      pb++;
    } else if (a[pa] > b[pb]) pb++;
    else pa++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

console.log(twoPointer(a, b));
