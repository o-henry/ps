/**
 * 똑같이 나눈다.
 * n / m
 *
 * @param input { 1000 , 100 }
 * @param output { 10, spare: 0 }
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

function solution(n, m) {
  console.log(n / m + "\n" + (n % m));
}

solution(input[0], input[1]);
