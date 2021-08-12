function solution(n) {
  let arr = Array.from({ length: n }, () => Array.from({ length: n }).fill(0));
  let m = arr.length;

  let dx = [0];
  let dy = [-1];
  let d = ["U"];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][0] = i + 1;

      if (i === m - 1) {
        arr[i][j] = n++;
      }

      let t = n * 2 - 1;
      if (i === j && i !== m - 1 && j !== m - 1) {
        arr[i][j] = t + m - 1 - i;
      }

      if (arr[i][j] === 0 && arr[i - 1][j] !== 0) {
        arr[i][j] = arr[i - 1][j] + 1;
      }
    }
  }

  console.log(arr);
}

console.log(solution(4));
console.log(solution(5));
