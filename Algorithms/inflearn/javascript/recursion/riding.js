function Riding(c, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, S) {
    if (S >= c) return;
    if (L === n) {
      max = Math.max(max, S);
    } else {
      DFS(L + 1, S + arr[L]);
      DFS(L + 1, S);
    }
  }

  DFS(0, 0);
  return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(Riding(259, arr));
