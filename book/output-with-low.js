function OutputWithLow(arr) {
  let srt = [];
  arr.sort((a, b) => a[1] - b[1]);
  for (let i of arr) {
    srt.push(i[0]);
  }
  return srt;
}

console.log(
  OutputWithLow([
    ["홍길동", 95],
    ["이순신", 77],
  ])
);
