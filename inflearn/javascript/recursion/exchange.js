function exchange(n, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > n) return;
    if (L >= answer) return;
    if (sum === n) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(exchange(15, arr));
