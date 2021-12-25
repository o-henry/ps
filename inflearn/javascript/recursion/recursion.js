function recursion(n) {
  function DFS(L) {
    if (L === 0) return;
    DFS(L - 1);
    console.log(L);
  }

  DFS(n);
}

console.log(recursion(3));
