function antenna(arr) {
  arr.sort();
  return arr[Math.floor((arr.length - 1) / 2)];
}

console.log(antenna([5, 1, 7, 9]));
