function solution(n, m, arr) {
  let stack = [];

  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = arr[i] + arr[j] + arr[k];
        stack.push(sum);
      }
    }
  }
  stack.sort((a, b) => b - a);
  console.log("stack", stack);
  return stack[m - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
