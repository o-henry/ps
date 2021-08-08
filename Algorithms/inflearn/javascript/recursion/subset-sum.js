function subsetSum(arr) {
  let answer = "NO";
  let n = arr.length;
  let flag = 0;
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

  function DFS(L, S) {
    if (flag) return;
    if (L === n) {
      if (sum - S === S) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, S + arr[L]);
      DFS(L + 1, S);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(subsetSum(arr));
