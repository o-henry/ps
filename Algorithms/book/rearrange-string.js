function RearrangeString(str) {
  let res = "";
  let s = [];
  let number = 0;

  for (let x of str) {
    if (isNaN(x)) {
      s.push(x);
    } else number += parseInt(x);
  }

  s = s.sort().join("");
  res = s + number;

  return res;
}

// console.log(RearrangeString("K1KA5CB7"));
console.log(RearrangeString("AJKDLSI412K4JSJ9D"));
