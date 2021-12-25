const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

console.log(parseInt(input[0]) * parseInt(input[1]));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(A, B) {
  console.log(A - B);
}

solution(input[0], input[1]);
