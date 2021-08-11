function solution(m, a) {
  let cnt = 0,
    s = 0;

  let lt = 0,
    rt = 0;

  while (rt <= a.length) {
    if (s < m) {
      s += arr[rt];
      rt++;
    } else {
      s -= a[lt];
      lt++;
    }

    if (s === m) {
      cnt++;
    }
  }

  return cnt;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
console.log(solution(6, [1, 1, 1, 2, 4]));
console.log(solution(2, [1, 1, 1]));
