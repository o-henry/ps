function snake(n, k, pk, l, pl) {
  let arr = Array.from({ length: n }, () => Array.from({ length: n }).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }

  console.log(arr);
}

let n = 6;
let k = 3;
let pk = [
  [3, 4],
  [2, 5],
  [5, 3],
];
let l = 3;
let pl = [
  [3, "D"],
  [15, "L"],
  [17, "D"],
];
console.log(snake(n, k, pk, l, pl));
