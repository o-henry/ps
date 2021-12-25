function replaceTwoArrays(a, b, k) {
  a.sort();
  b.sort((a, b) => b - a);

  let i = 0;
  while (i < k) {
    a[i] = b[i];
    i++;
  }

  return a.reduce((acc, curr) => (acc += curr));
}

console.log(replaceTwoArrays([1, 2, 5, 4, 3], [5, 5, 6, 6, 5], 3));
