function solution(arr) {
  let cnt = 0;
  arr.sort((a, b) => a[1] - b[1]);

  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      cnt++;
      et = x[1];
    }
  }

  console.log(cnt);
  return cnt;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
