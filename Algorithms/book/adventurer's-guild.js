function Guild(arr) {
  arr.sort((a, b) => a - b);
  let res = 0,
    cnt = 0;

  for (let x of arr) {
    cnt += 1;
    if (cnt >= x) {
      res += 1;
      cnt = 0;
    }
  }

  return res;
}

console.log(Guild([2, 3, 1, 2, 2]));
