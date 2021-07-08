function solution(arr) {
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let n of arr) {
    if (n % 2 === 1) {
      sum += n;

      if (n < min) {
        min = n;
      }
    }
  }

  console.log(sum, min);
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
