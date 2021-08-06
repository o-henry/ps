function binary(n) {
  let res = "";
  function DFS(n) {
    if (n === 0) return;
    DFS(parseInt(n / 2));
    res += n % 2;
  }

  DFS(n);

  console.log("compare", n.toString(2));
  return res;
}

console.log(binary(11));
