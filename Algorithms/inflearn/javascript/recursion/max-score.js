function maxScore(limit, ps, pt) {
  let max = Number.MIN_SAFE_INTEGER;
  let n = ps.length;

  function DFS(L, st, ss) {
    if (st > limit) {
      return;
    }

    if (L === n) {
      max = Math.max(max, ss);
    } else {
      DFS(L + 1, pt[L] + st, ps[L] + ss);
      DFS(L + 1, st, ss);
    }
  }

  DFS(0, 0, 0);
  return max;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(maxScore(20, ps, pt));
