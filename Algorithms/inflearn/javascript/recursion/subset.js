function subset(n) {
  let check = Array.from({ length: n + 1 }, () => 0);
  let result = [];

  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + " ";
      }
      if (tmp.length) result.push(tmp);
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return result;
}

console.log(subset(3));

// const subsets = (nums) => {
//   const res = [];

//   const dfs = (start = 0, arr = []) => {
//     res.push(arr);

//     for (let i = start; i < nums.length; i++) {
//       dfs(i + 1, [...arr, nums[i]]);
//     }
//   };
//   dfs();

//   return res;
// };
