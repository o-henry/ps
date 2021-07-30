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

console.log(FlipString("0001100"));
