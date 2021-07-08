function solution(arr1, arr2) {
  let stack = [];
  let n = arr1.length;
  let m = arr2.length;

  let pa = 0,
    pb = 0;

  while (pa < n && pb < m) {
    if (arr1[pa] <= arr2[pb]) stack.push(arr1[pa++]);
    else stack.push(arr2[pb++]);
  }
  while (pa < n) stack.push(arr1[pa++]);
  while (pb < m) {
    // console.log("pb", pb);
    stack.push(arr2[pb++]);
  }

  return stack;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
