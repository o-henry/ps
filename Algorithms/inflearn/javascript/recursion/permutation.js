function permutation(n, arr) {
  let answer = [];
  let tmp = Array.from({ length: n }, () => 0);
  let check = Array.from({ length: arr.length }, () => 0);

  function DFS(L) {
    if (L === n) {
      return answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9, 5];
console.log(permutation(2, arr));
