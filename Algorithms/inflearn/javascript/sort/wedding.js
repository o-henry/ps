function solution(arr) {
  let answer = 0;
  let p = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let x of arr) {
    if (x[0] >= p && x[1] <= p) {
      answer++;
    }
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
