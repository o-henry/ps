function MultiplyOrAdd(str) {
  let res = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] <= 1 || res <= 1) {
      res += parseInt(str[i]);
    } else {
      res *= str[i];
    }
  }

  return res;
}

// 0 2 9 8 4 -> 576
console.log(MultiplyOrAdd("02984"));
