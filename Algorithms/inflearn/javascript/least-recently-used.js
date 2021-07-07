function solution(n, arr) {
  let array = new Array(n).fill(0);
  console.log(array);

  for (let e of arr) {
    if (!array.includes(e)) {
      array.unshift(e);
      array.pop();
    }
    console.log(array);
  }

  for (let i = 0; i < n; i++) {
    let j = i;
    let curr = array[i];

    while (j > 0 && array[j - 1] > curr) {
      array[j] = array[j - 1];
      j -= 1;
    }
  }

  console.log(array);
}

let n = 5;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(n, arr));
