function solution(p, l) {
  let arr = [...Array(4).keys()];
  let n = arr.length;

  for (let i = 1; i <= n; i++) {
    if (p[l] === Math.max(...p)) {
      return 1;
    }

    if (p[0] < p[i]) {
      let f = arr.shift(); // 0
      let d = arr.splice(i, 1);
      arr.unshift(d);
      arr.push(f);
    } else {
    }
  }

  console.log(arr);
}

// console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
