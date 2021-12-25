function solution(m, arr) {
  let cnt = 0,
    lt = 0,
    rt = 0,
    sum = arr[rt];

  while (rt < arr.length) {
    if (sum <= m) {
      cnt += rt - lt + 1;
      sum += arr[++rt];
    } else {
      sum -= arr[lt++];
    }
  }

  return cnt;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
