const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

function solution(n, m) {
  console.log(n + m + "\n" + (n - m) + "\n" + n * m);
}

solution(input[0], input[1]);
