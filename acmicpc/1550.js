const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(n) {
  console.log(parseInt(n, 16));
}

solution(input[0]);
