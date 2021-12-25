function solution(numbers, target) {
  let cnt = 0;
  let check = Array.from({ length: numbers.length }, () => 0);

  function DFS(L, s) {
    if (L === numbers.length) {
      if (s === target) {
        cnt++;
      }
    } else {
      check[L] = 1;
      DFS(L + 1, s + numbers[L]);
      check[L] = 0;
      DFS(L + 1, s - numbers[L]);
    }
  }

  DFS(0, 0);
  return cnt;
}

console.log(solution([1, 1, 1, 1, 1], 3));
