const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

console.log(parseInt(input[0]) * parseInt(input[1]));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item); // 문자열로 바꿔주고 > 공백을 기준으로 split해주고(split을 먼저 해줘야 배열의 형태로 바뀐다) > 그 다음에 map을 이용해서 배열을 돌면서 모두 숫자로 바꿔주기

function solution(A, B) {
  console.log(A - B);
}

solution(input[0], input[1]);
