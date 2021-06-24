function continuousSubsequence(a, b) {
  let count = 0;
  let sum = 0;
  let pl = 0,
    pr = 0;

  for (pr; pr < b.length; pr++) {
    sum += b[pr];
    if (sum === a) count++;

    while (sum >= a) {
      sum -= b[pl++];
      if (sum === a) {
        count++;
      }
    }
  }

  console.log(count);

  return count;
}

let a = 6;
let b = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(continuousSubsequence(a, b));
