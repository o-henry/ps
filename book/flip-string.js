function FlipString(str) {
  let cnt = 0;

  let cone = 0,
    czero = 0;

  for (let x of str) {
    if (x === "1") {
      cone++;
    } else {
      czero++;
    }
  }

  if (cone > czero) {
    for (let x of str) {
      if (x === "0") {
        x = "1";
        cnt++;
      }
    }
  } else {
    for (let x of str) {
      if (x === "1") {
        x = "0";
        cnt++;
      }
    }
  }

  return cnt;
}

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

console.log(FlipString("1010101"));
console.log(solution("1010101"));
