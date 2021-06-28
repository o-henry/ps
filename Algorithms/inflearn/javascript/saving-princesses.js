function SavingPrincesses(n, k) {
  let answer = 0;
  let array = range(1, n);
  // or queue = Array.from({ length: n}, (v, i) => i + 1)

  //   while (array.length) {
  for (let i = 0; i < array.length; i++) {
    if (i === k - 1) {
      console.log("number", array, array[i], i, k - 1);
      array.shift();
      i = 0;
    } else {
      array.push(array.shift());
    }
  }
  //   }
  console.log(array);

  return answer;
}

const range = (from, to) => (from <= to ? [from, ...range(from + 1, to)] : []);

let n = 8,
  k = 3;
console.log(SavingPrincesses(n, k));
