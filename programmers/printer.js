function solution(p, l) {
  let arr = p.map((t, i) => ({
    s: i === l,
    v: t,
  }));

  let cnt = 0;

  while (true) {
    let cur = arr.shift();

    if (arr.some((t) => t.v > cur.v)) arr.push(cur);
    else {
      cnt++;
      if (cur.s) return cnt;
    }
  }
  return arr;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
