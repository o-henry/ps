function solution(times) {
  let count = 0;

  let x = times.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else {
      return a[0] - b[0];
    }
  });

  let pos = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[pos][1] > x[i][0]) count++;
    else {
      break;
      pos++;
    }
  }

  return count;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 15],
];
console.log(solution(arr));
