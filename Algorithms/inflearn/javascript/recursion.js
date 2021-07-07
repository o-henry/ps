function solution(n) {
  /**
   * stack-frame
   * @param {*} L
   * @returns 1 2 3
   */
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

console.log(solution(3));
