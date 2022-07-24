const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
  let czero = 0,
    cone = 0;

  if (s[0] === "1") czero++;
  else cone++;

  for (let i = 1; i < s.length; i++) {
    if (s[i] != s[i + 1]) {
      if (s[i] === "1") czero++;
      else cone++;
    }
  }

  return Math.min(czero, cone);
}

solution(input[0]);
